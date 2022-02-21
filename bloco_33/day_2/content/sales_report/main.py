from abc import ABC, abstractmethod
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


class SalesReportJSON(SalesReport):
    def serialize(self):
        with open(self.export_file + ".json", "w") as file:
            json.dump(self.build(), file)


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
