import requests
from parsel import Selector

URL_BASE = "https://en.wikipedia.org/wiki/Gallery_of_sovereign_state_flags"

response = requests.get(URL_BASE)
selec = Selector(response.text)

gallery_boxes = selec.css(".gallery .gallerybox")

for box in gallery_boxes:
    title = box.css(".gallerytext p a::text").get()
    img_url = "https:" + box.css(".thumb a.image img::attr(src)").get()
    img_extension = img_url.split(".")[-1]
    img_response = requests.get(img_url)

    with open(f'flags_imgs/{title}.{img_extension}', mode="wb") as file:
        file.write(img_response.content)
