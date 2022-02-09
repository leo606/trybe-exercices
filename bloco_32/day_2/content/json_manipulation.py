import json

with open("./pokemons.json", mode="r") as poke_file:
    pokes = json.load(poke_file)["results"]

grass_pokes = [poke for poke in pokes if "Grass" in poke["type"]]

with open("./grass_pokes.json", mode="w") as file:
    json_type = json.dumps(grass_pokes)
    file.write(json_type)
