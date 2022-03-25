import sys

"""Perceba que temos uma coleção de valores
e operações que atuam sobre estes valores,
de acordo com o que foi definido pelo TAD."""


class Array:
    def __init__(self):
        self.data = []

    def __len__(self):
        # quando pedido o tamanho do array
        # retorne o tamanho de data
        return len(self.data)

    def __str__(self):
        # converte para string e exibe os valores de data
        return str(self.data)

    def get(self, index):
        return self.data[index]

    def set(self, index, value):
        self.data.insert(index, value)

    def remove(self, index):
        # removeremos o item, retornando-o
        return self.data.pop(index)

    def update(self, index, value):
        self.data[index] = value


array = Array()
array_memory_size = sys.getsizeof(array.data)
print("empty array memory - ", array_memory_size)

array.set(0, "Marcos")
array.set(1, "Patrícia")

# quando começamos as inserções o valor muda
array_memory_size = sys.getsizeof(array.data)
print("two items memory - ", array_memory_size)

array.set(2, "Matheus")
array.set(3, "Giovana")
array_memory_size = sys.getsizeof(array.data)
print("four items memory - ", array_memory_size)

array.set(4, "Alberto")
array.set(5, "Marta")
array.set(6, "Túlio")
array.set(7, "Michelle")
array_memory_size = sys.getsizeof(array.data)
print("eight items memory - ", array_memory_size)

print('idx 3', array.get(3))
array.update(3, 'new value')
print('idx 3', array.get(3))
