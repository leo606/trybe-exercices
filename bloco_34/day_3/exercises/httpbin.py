import requests

# Exercício 1 Faça uma requisição ao site https://httpbin.org/encoding/utf8 e
# exiba seu conteúdo de forma legível.

URL_BASE = "https://httpbin.org/encoding/utf8"

response = requests.get(URL_BASE)

print(response.text)
