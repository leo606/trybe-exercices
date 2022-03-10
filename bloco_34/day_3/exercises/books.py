import requests
from parsel import Selector

# Exercício 4 Baseados em uma página contendo detalhes sobre um
# livro http://books.toscrape.com/catalogue/the-grand-design_405/index.html ,
# faça a extração dos campos título, preço,
# descrição e url contendo a imagem de capa do livro.
# O preço deve vir somente valores numéricos e ponto. Ex: Â£13.76 -> 13.76 .
# A descrição de ter o sufixo "more..." removido quando existir.
# Os campos extraídos devem ser apresentados separados por vírgula.
# Ex: título,preço,descrição,capa.

# Exercício 5 Modifique o exercício anterior para retornar também
# quantos livros estão disponíveis apresentando como último campo no retorno.

URL_BASE = "https://books.toscrape.com/catalogue/the-grand-design_405/"
description_suffix = "...more"

response = requests.get(URL_BASE)
selector = Selector(response.text)

title = selector.css(".product_main h1::text").get()

price = selector.css(".product_main .price_color::text").re_first(
    r"\d+\.\d{2}"
)

description = selector.css(
    ".product_page #product_description ~ p::text"
).get()

if description.endswith(description_suffix):
    description = description.removesuffix(description_suffix)

cover_url = selector.css(".product_page .thumbnail img::attr(src)").get()

stock_status = selector.css(
    ".product_main p.instock.availability::text"
).re_first(r"\d+")

print(
    f"{title}, {price}, {description}, {URL_BASE+ cover_url}, {stock_status}"
)
