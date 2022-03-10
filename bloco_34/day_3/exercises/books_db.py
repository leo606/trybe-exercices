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


# list_by_category("Miscellaneous")

# Exercício 7 Faça o calculo de quantos livros publicados ( STATUS = PUBLISH )
# temos em nosso banco de dados por categoria. Ordenando-os de forma
# decrescente de acordo com a quantidade.


def list_published():
    with MongoClient() as client:
        db = client.library
        books = db.books.aggregate(
            [
                {"$match": {"status": "PUBLISH"}},
                {"$unwind": "$categories"},
                {"$group": {"_id": "$categories", "quantity": {"$count": {}}}},
                {"$sort": {"quantity": -1}},
            ]
        )
        for book in books:
            pprint(f"{book['_id']} {book['quantity']}")


list_published()
