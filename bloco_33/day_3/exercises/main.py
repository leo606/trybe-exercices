# from schemas.star_wars import StarWarsGame, Soldier, Jedi
from schemas.cards import Baralho

# StarWarsGame(Soldier(5)).fight_enemy()
# StarWarsGame(Jedi(20)).fight_enemy()
cartas = Baralho()

for carta in cartas:
    print(carta)
