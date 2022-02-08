# ercício 1: Crie uma função que receba dois números e retorne o maior deles.
import math


def higher_number(a, b):
    if a > b:
        return a
    else:
        return b


# Exercício 2: Calcule a média aritmética dos valores contidos em uma lista.
def list_avg(list):
    return sum(list) / len(list)


# Exercício 3: Faça um programa que, dado um valor n qualquer,
# tal que n > 1 , imprima na tela um quadrado feito de asteriscos de
# lado de tamanho n . Por exemplo:
def print_square(n):
    for i in range(0, n):
        print("*" * n)


# Exercício 4: Crie uma função que receba uma lista de nomes e retorne
# o nome com a maior quantidade de caracteres.
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"],
# o retorno deve ser "Fernanda" .
def longest_name(names):
    longest = ""
    for name in names:
        if len(name) > len(longest):
            longest = name
    return longest


# Exercício 5:
# Considere que a cobertura da tinta é de 1 litro para cada 3 metros quadrados
# e que a tinta é vendida em latas de 18 litros, que custam R$ 80,00.
# Crie uma função que retorne dois valores em uma tupla contendo
# a quantidade de latas de tinta a serem compradase
# o preço total a partir do tamanho de uma parede(em m²).
def painting(size):
    ink_amount = size / 3
    can_amount = math.ceil(ink_amount / 18)
    total_price = can_amount * 80
    return (can_amount, total_price)


def triangle_type(s1, s2, s3):
    if s1 + s2 <= s3:
        return "not triangle"
    elif s1 + s3 <= s2:
        return "not triangle"
    elif s2 + s3 <= s1:
        return "not triangle"
    elif s1 == s2 == s3:
        return "equilateral"
    elif s1 != s2 != s3:
        return "scalene"
    else:
        return "isosceles"


def type_of_triangle(side1, side2, side3):
    is_triangle = (
        side1 + side2 > side3
        and side2 + side3 > side1
        and side1 + side3 > side2
    )
    if not is_triangle:
        return "não é triângulo"
    elif side1 == side2 == side3:
        return "equilátero"
    elif side1 == side2 or side2 == side3 or side1 == side3:
        return "isósceles"
    else:
        return "escaleno"
