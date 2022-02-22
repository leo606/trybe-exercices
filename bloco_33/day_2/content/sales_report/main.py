from abc import ABC, abstractmethod
import gzip
import json
import csv


class SalesReport(ABC):
    def __init__(self, export_file):
        self.export_file = export_file

    def build(self):
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    @abstractmethod
    def serialize(self):
        raise NotImplementedError

    def compress(self):
        binary_content = json.dumps(self.build()).encode("utf-8")

        with gzip.open(self.export_file + ".gz", "wb") as compressed_file:
            compressed_file.write(binary_content)

    @abstractmethod
    def get_length(self):
        raise NotImplementedError


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)

    def get_length(self):
        return len(self.build())


# Antes de prosseguirmos para entender o que é aquele
# @abstractmethod e aquele (ABC) , vamos fixar o
# entendimento de herança! Implemente uma classe SalesReportCSV
# que seja herdeira da classe SalesReport , da mesma forma que
# fizemos com a SalesReportJSON . Para testar seu funcionamento,
# instancie-a e chame sua função serialize


class SalesReportCSV(SalesReport):
    def serialize(self):
        with open(self.export_file + ".csv", "w") as file:
            writer = csv.writer(file)
            headers = [
                "Coluna 1",
                "Coluna 2",
                "Coluna 3",
            ]
            writer.writerow(headers)
            for row in self.build():
                writer.writerow(row.values())

    def get_length(self):
        return len(self.build())


my_sales_report_json = SalesReportJSON("my_report")
my_sales_report_csv = SalesReportCSV("my_report")

my_sales_report_json.serialize()
my_sales_report_json.compress()
my_sales_report_csv.serialize()

# Defina na classe SalesReport um segundo método abstrato
# chamado get_length que retorna quantos itens tem no
# relatório. Tente chamar esse método a partir da classe
# herdeira que não implementa esse método e veja o erro que você recebe.
# Tente instanciar a SalesReport também! Depois disso, implemente
# uma lógica qualquer para esse método em uma das classes herdeiras
# e verifique que já é possível instanciá-la e até chamar o método!

print(my_sales_report_csv.get_length())
