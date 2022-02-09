import json

with open("./pokemons.json", mode="r") as poke_file:
    pokes = json.load(poke_file)["results"]

grass_pokes = [poke for poke in pokes if "Grass" in poke["type"]]

with open("./grass_pokes2.json", mode="w") as file:
    json.dump(grass_pokes, file)
