# Exercício 3 Dado um array de números inteiros que representam
# produtos em um e-commerce.
# Verifique quantos produtos formam boas combinações,
# considerando que uma boa combinação é quando um
# produto é igual ao outro e seu índice é maior que o anterior.
# Esta combinação pode ser utilizada para modificar os
# produtos de uma página. Por exemplo:

# Exemplo 1:
produtos1 = [1, 3, 1, 1, 2, 3]
# resultado = 4
# Os índices (0, 2), (0, 3), (1, 5), (2, 3) formam combinações.

# Exemplo 2:
produtos2 = [1, 1, 2, 3]
# resultado = 1
# Os índices (0, 1) formam a única combinação.


def combination(products):
    count = 0
    for index, product in enumerate(products):
        for pro in products[index + 1:]:
            if product == pro:
                count += 1
    return count


print("1 -> ", combination(produtos1))
print("2 -> ", combination(produtos2))
