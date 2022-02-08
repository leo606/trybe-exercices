# Exercício 1: Dada uma lista, descubra o menor elemento.
# Por exemplo, [5, 9, 3, 19, 70, 8, 100, 2, 35, 27] deve retornar 2 .
def smallest_number(list):
    smallest = list[0]
    for number in list:
        if number < smallest:
            smallest = number
    return smallest


def smallest_number_easy(list):
    return min(list)


# Exercício 2:
# Faça um programa que, dado um valor n qualquer,
# tal que n > 1 , imprima na tela um triângulo
# retângulo com n asteriscos de base.
# Por exemplo, para n = 5 o triângulo terá 5 asteriscos na base:
def print_triangle(n):
    for index in range(0, n):
        print("*" * (index + 1))
