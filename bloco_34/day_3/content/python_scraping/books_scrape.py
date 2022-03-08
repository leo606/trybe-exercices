import requests
from parsel import Selector

# response = requests.get("http://books.toscrape.com/")
# selector = Selector(text=response.text)

# # O título está no atributo title em um elemento âncora (<a>)
# # Dentro de um h3 em elementos que possuem classe product_pod
# titles = selector.css(".product_pod h3 a::attr(title)").getall()
# # Estamos utilizando a::attr(title) para capturar somente o valor contido no
# # texto do seletor

# # Os preços estão no texto de uma classe price_color
# # Que se encontra dentro da classe .product_price
# prices = selector.css(
#     ".product_pod .product_price p.price_color::text"
# ).getall()

# # Combinando tudo podemos buscar os produtos
# # em em seguida buscar os valores individualmente
# for product in selector.css(".product_pod"):
#     title = product.css("h3 a::attr(title)").get()
#     price = product.css(".product_price p.price_color::text").get()
#     print(title, price)

BASE_URL = "https://books.toscrape.com/catalogue/"
next_page_url = "page-1.html"

while next_page_url:
    # Busca o conteúdo da próxima página
    response = requests.get(BASE_URL + next_page_url)
    selector = Selector(text=response.text)
    # Imprime os produtos de uma determinada página
    for product in selector.css(".product_pod"):
        title = product.css("h3 a::attr(title)").get()
        price = product.css(".product_price p.price_color::text").get()

        details_url = product.css("h3 a::attr(href)").get()
        details_response = requests.get(BASE_URL + details_url)
        details_selector = Selector(details_response.text)
        details = details_selector.css("#product_description ~ p::text").get()

        print(title, price)
        print(details)
        print("=============================================")
    next_page_url = selector.css(".next a::attr(href)").get()
