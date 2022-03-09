from pymongo import MongoClient
from pprint import pprint

# Exercício 6 Escreva um programa que se conecte ao banco de dados
# library e liste os livros da coleção books para uma determinada
# categoria recebida por uma pessoa usuária.
# Somente o título dos livros deve ser exibido.


def list_by_category(category):
    with MongoClient() as client:
        db = client.library
        books = db.books.find(
            {"categories": category}, {"_id": False, "title": True}
        )
        for book in books:
            pprint(book)


list_by_category("Miscellaneous")
