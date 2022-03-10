import requests


try:
    response = requests.get("https://httpbin.org/delay/10", timeout=3)
    print(response)
except requests.ReadTimeout:
    print("except")
    response = requests.get("https://httpbin.org/delay/1", timeout=2)
    print(response)
finally:
    print(response.status_code)
