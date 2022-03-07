import requests

# # GET request
# response = requests.get("https://github.com/")

# # status code
# print(response.status_code)

# # content type
# print(response.headers["Content-Type"])

# # html content
# print(response.text)

# # bytes content (unformatted)
# print(response.content)

# # POST request
response_post = requests.post("https://httpbin.org/post", data="whatever")
# print(response_post.text)

# # GET request sending headers
response = requests.post(
    "https://httpbin.org/post",
    headers={"Accept": "application/json", "test": "this is a test"},
)
# print(response.text)

# # GET binary content (png image)
# response = requests.get("http://httpbin.org/image/png")
# print(response.content)

# # GET json content
response = requests.get("http://httpbin.org/get")
print(response.json())

# # requests raises a exception if response is not ok
response = requests.get("http://httpbin.org/status/404")
# response.raise_for_status()
