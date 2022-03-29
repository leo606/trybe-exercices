# Exercício 1 - Blefe
# Blefe é um jogo de duas pessoas onde cada uma tenta adivinhar os número
# que a outra irá escolher. Cada jogador escolhe 5 números de 0 a 10,
# inclusive. A pontuação final é calculada da seguinte forma:
# A nota de partida de cada pessoa é o maior número que a outra pessoa
# não escolheu;
# O redutor é o menor numero que a outra pessoa não escolheu;
# A pontuação final é a nota de partida - redutor .

# Exemplo:
# clara = [0, 1, 5, 9, 10]
# nota de partida: 5
# redutor: 1
# pt: 4

# marco = [0, 2, 8, 9, 10]
# nota de partida: 8
# redutor: 2
# pt individual: 6

# Quem ganhou: Marco

entrada = {"Marco": [0, 2, 8, 9, 10], "Clara": [0, 1, 5, 9, 10]}
# saída: 'Marco'


def blefe(play):
    player1, player2 = play.keys()
    game_set = set(range(0, 11))

    player1_set = set(play[player1])
    player2_set = set(play[player2])

    match_grade_player1 = max(game_set.difference(player1_set))
    match_grade_player2 = max(game_set.difference(player2_set))

    reducer_player1 = min(game_set.difference(player1_set))
    reducer_player2 = min(game_set.difference(player2_set))

    player1_pontuation = match_grade_player1 - reducer_player1
    player2_pontuation = match_grade_player2 - reducer_player2

    if player1_pontuation > player2_pontuation:
        return player1
    else:
        return player2


print(blefe(entrada))
