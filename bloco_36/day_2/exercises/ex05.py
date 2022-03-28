# Exercício 5 Em um software gerenciador de servidores,
# precisamos verificar o número de servidores que se comunicam.
# Os servidores estão representados como um array bidimensional
# onde o valor 1 representa um computador e 0 a ausência do mesmo.
# Dois servidores se comunicam se eles estão na mesma linha ou mesma coluna.

servidores1 = [[1, 0], [0, 1]]
# resultado: 0
# Linhas e colunas são diferentes.

servidores2 = [[1, 0], [1, 1]]
# resultado: 3
# Todos os servidores se comunicam com ao menos um outro servidor.

servidores3 = [[1, 0, 0], [1, 0, 0], [0, 0, 1]]
# resultado: 2
# O servidor de índice (2, 2) não possui nenhum outro na mesma linha e coluna


def count_servers(servers):
    counter = 0
    for row in servers:
        conns_in_row = sum(row)
        conns_in_col = 0
        for index, _col in enumerate(row):
            column = [row[index] for row in servers]
            conns_in_col += sum(column)
        counter += conns_in_row + conns_in_col
    return counter


print("1 -> ", count_servers(servidores1))
print("2 -> ", count_servers(servidores2))
print("3 -> ", count_servers(servidores3))
