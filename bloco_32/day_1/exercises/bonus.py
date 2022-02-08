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


# Exercício 3: Crie uma função que receba um número inteiro N
# e retorne o somatório de todos os números de 1 até N.
# Por exemplo, para N = 5 , o valor esperado será 15 .
def sum_range(n):
    sum = 0
    for index in range(1, n + 1):
        sum += index
    return sum


# Exercício 4: Um posto está vendendo combustíveis
# com a seguinte tabela de descontos:

# Álcool:
#     - Até 20 litros, desconto de 3% por litro;
#     - Acima de 20 litros, desconto de 5% por litro.
#   Gasolina:
#     - Até 20 litros, desconto de 4% por litro;
#     - Acima de 20 litros, desconto de 6% por litro.

# Escreva uma função que receba o número de litros vendidos,
# o tipo de combustível
# (codificado da seguinte forma: A - álcool, G - gasolina),
# e retorne o valor a ser pago pelo cliente,
# sabendo-se que o preço do litro da gasolina é R$ 2,50,
# e o preço do litro do álcool é R$ 1,90.


def gas_station(type, amount):
    price = 0
    if type == "A":
        price = {True: (1 - 0.03), False: (1 - 0.05)}[amount <= 20] * 1.9
    if type == "G":
        price = {True: (1 - 0.04), False: (1 - 0.06)}[amount <= 20] * 2.5
    return amount * price
