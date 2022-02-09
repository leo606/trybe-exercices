import sys


# Exercício 1: Faça um programa que solicite o nome de
# uma pessoa usuária e imprima-o na vertical.
def vertical_name():
    name = input("what's your name")
    for cha in name:
        print(cha)


# Exercício 2: Escreva um programa que receba vários números naturais
# e calcule a soma desses valores.
# Caso algum valor da entrada seja inválido,
# por exemplo uma letra, uma mensagem deve ser exibida,
# na saída de erros, no seguinte formato:
# "Erro ao somar valores, {valor} é um valor inválido".
# Ao final, você deve imprimir a soma dos valores válidos.
def sum_number():
    numbers = input("numbers separated by spaces ").split(" ")
    sum = 0
    for number in numbers:
        if not number.isdigit():
            return print(
                f"error summing values, {number} is not digit",
                file=sys.stderr
            )
        else:
            sum += int(number)
    return sum
