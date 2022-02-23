# Exercício 1: Abaixo temos parte da implementação
# de um jogo do mundo de Star Wars .
# Porém esse código está com um erro.
# Encontre-o e corrija-o, sem alterar o código
# das classes de personagens ( Soldier e Jedi ).
from abc import ABC, abstractmethod


class Character(ABC):
    @abstractmethod
    def attack(self):
        raise NotImplementedError


class Soldier(Character):
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 1


class Jedi(Character):
    def __init__(self, level):
        self.level = level

    def attack(self):
        return self.level * 100


class StarWarsGame:
    def __init__(self, character):
        self.character = character

    def fight_enemy(self):
        print(f"You caused {self.character.attack()} of damage to the enemy")
