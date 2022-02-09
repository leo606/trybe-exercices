# Exercício 3: Modifique o exercício anterior para
# que as palavras sejam lidas de um arquivo.
# Considere que o arquivo terá cada palavra em uma linha.


import random

with open("./words.txt", mode="r") as file:
    WORDS = file.read().split("\n")

word = random.choice(WORDS)
scrambled_word = "".join(random.sample(word, len(word)))

print(scrambled_word)
for index in range(3):
    guess = input("what is the word ")
    if guess == word:
        print("Correct!")
        break
