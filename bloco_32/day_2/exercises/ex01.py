# Exercício 1: Faça um programa que receba um nome
# e imprima o mesmo na vertical em escada invertida. Exemplo

# Entrada:
# PEDRO

# Saída:
# PEDRO
# PEDR
# PED
# PE
# P

name = input("your name: ")

for index in range(len(name) - 1, 0, -1):
    print(name[0:index])
