# ercício 1: Crie uma função que receba dois números e retorne o maior deles.
def higher_number(a, b):
    if a > b:
        return a
    else:
        return b


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def list_avg(list):
    return sum(list) / len(list)


# Exercício 3: Faça um programa que, dado um valor n qualquer, tal que n > 1 , imprima na tela um quadrado feito de asteriscos de lado de tamanho n . Por exemplo:
def print_square(n):
    for i in range(0, n):
        print('*' * n)
