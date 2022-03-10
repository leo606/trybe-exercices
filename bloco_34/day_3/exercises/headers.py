import requests

# Exercício 3 Às vezes, você precisa fazer com que o seu raspador
# da Web pareça estar fazendo solicitações HTTP como o navegador,
# para que o servidor retorne os mesmos dados que você vê no seu navegador.
# Faça uma requisição a
# https://scrapethissite.com/pages/advanced/?gotcha=headers
# e verifique se foi bem sucedido. Para verificar se foi bem sucedido,
# faça assert "bot detected" not in response.text ,
# se nada acontecer, seu código está funcionando.

URL_BASE = "https://scrapethissite.com/pages/advanced/?gotcha=headers"

response = requests.get(
    URL_BASE,
    headers={
        "user-agent": "Mozilla/5.0 (X11; Linux x86_64)",
        "accept": "text/html",
    },
)

print(response.text)
