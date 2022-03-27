# Exercício 2 Em um jogo de baralho, as cartas estão representadas
# por um array numérico. Para iniciar o jogo devemos
# embaralhar as cartas. Faremos isto dividindo uma
# porção de cartas em 2 e depois mesclando as duas porções. Por exemplo:

# Exemplo 1:
cartas1 = [2, 6, 4, 5]
# cartas por parte = 2

# resultado = [2, 4, 6, 5]

# Exemplo 2:
cartas2 = [1, 4, 4, 7, 6, 6]
# cartas por parte = 3

# resultado = [1, 7, 4, 6, 4, 6]


def card_shuffle(cards):
    part1 = cards[: len(cards) // 2]
    part2 = cards[len(cards) // 2:]
    shuffle = []

    for index, card in enumerate(part1):
        shuffle.extend([card, part2[index]])

    return shuffle


print("1 ->", card_shuffle(cartas1))
print("2 ->", card_shuffle(cartas2))
