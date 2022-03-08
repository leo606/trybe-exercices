import requests

URL_BASE = "https://httpbin.org/encoding/utf8"

response = requests.get(URL_BASE)

print(response.text)
