import json
import csv


# Altere o código da classe SalesReport para que ela, além de gerar relatórios
# em JSON, gere relatórios em CSV também.
# Defina, primeiro, como você fará a extensão
# da lógica para depois gerar o CSV mesmo


class SalesReport:
    def __init__(self, export_file, type):
        self.export_file = export_file
        self.file_type = type

    def build(self):
        """Aqui colocamos a lógica para a entidade 'se criar',
        ou seja, criar um relatório imprimível. Por simplicidade,
        vamos omitir essa lógica nos exemplos!"""
        return [
            {"Coluna 1": "Dado 1", "Coluna 2": "Dado 2", "Coluna 3": "Dado 3"},
            {"Coluna 1": "Dado A", "Coluna 2": "Dado B", "Coluna 3": "Dado C"},
        ]

    def serialize(self):
        # Vamos gerar, aqui, o nosso relatório em formato JSON
        with open(f"{self.export_file}.{self.file_type}", "w") as file:
            if self.file_type == "json":
                json.dump(self.build(), file)
            elif self.file_type == "csv":
                writer = csv.writer(file)
                headers = [
                    "Coluna 1",
                    "Coluna 2",
                    "Coluna 3",
                ]
                writer.writerow(headers)
                for row in self.build():
                    writer.writerow(row.values())


# Classe, crie (em outras palavras, instancie!) uma nova entidade
# 'Relatório de vendas' para eu usar!

meu_relatorio_de_vendas_json = SalesReport("meu_relatorio", "json")
meu_relatorio_de_vendas_csv = SalesReport("meu_relatorio", "csv")

# Entidade 'meu_relatorio_de_vendas', que eu acabei de criar, imprima-se!

meu_relatorio_de_vendas_json.serialize()
meu_relatorio_de_vendas_csv.serialize()
