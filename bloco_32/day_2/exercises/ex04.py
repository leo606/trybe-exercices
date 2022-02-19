# Exercício 4: Dado o seguinte arquivo no formato JSON,
# leia seu conteúdo e calcule a porcentagem de livros
# em cada categoria, em relação ao número total de livros.
# O resultado deve ser escrito em um arquivo
# no formato CSV como o exemplo abaixo.

# categoria,porcentagem
# Python,0.23201856148491878
# Java,0.23201856148491878
# PHP,0.23201856148491878

import json

with open("./books.json", mode="r") as file:
    books = []
    for line in file:
        books.append(json.loads(line))

books_categories = {}
for book in books:
    for cat in book["categories"]:
        if cat not in books_categories:
            books_categories[cat] = 0
        books_categories[cat] += 1

print(books_categories)
