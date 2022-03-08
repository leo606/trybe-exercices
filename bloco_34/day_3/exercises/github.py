import requests

# Exercício 2 Faça uma requisição ao recurso usuários da
# API do Github ( https://api.github.com/users ),
# exibindo o username e url de todos os usuários retornados

URL_BASE = "https://api.github.com/users"

response = requests.get(URL_BASE)
users_list = response.json()

for user in users_list:
    print(user['login'], user['html_url'])
