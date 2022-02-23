from schemas.star_wars import StarWarsGame, Soldier, Jedi

StarWarsGame(Soldier(5)).fight_enemy()
StarWarsGame(Jedi(20)).fight_enemy()
