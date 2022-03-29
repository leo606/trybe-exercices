# Exercício 1 Em um software monitor, que verifica a resiliência de
# outro software, precisamos saber qual o tempo máximo que um software
# permaneceu sem instabilidades.
# Para isto, a cada hora é feito uma requisição ao sistema e verificamos
# se está ok. Supondo um array que contenha os estados coletados por nosso
# software, calcule quanto tempo máximo
# que o servidor permaneceu sem instabilidades.
# 1 - OK
# 0 - Instabilidades

valores_coletados1 = [0, 1, 1, 1, 0, 0, 1, 1]
# resultado = 3

valores_coletados2 = [1, 1, 1, 1, 0, 0, 1, 1]
# resultado = 4


def max_instable(data):
    max_count = 0
    curr_count = 0
    for hour in data:
        curr_count = curr_count + 1 if hour == 1 else 0
        if curr_count >= max_count:
            max_count = curr_count
    return max_count


# print("1 ->", max_instable(valores_coletados1))
# print("2 ->", max_instable(valores_coletados2))
