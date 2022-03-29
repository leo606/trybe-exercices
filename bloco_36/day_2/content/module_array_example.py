from array import array
import sys

int_array = array("I")

int_array.insert(0, 5)  # na posição 0 o valor 5
int_array.insert(1, 3)
int_array.insert(2, 5)
print("Após adicionar alguns valores: ", int_array)

# adicionar em uma posição intermediária
int_array.insert(1, 4)
print("Após inserção em índice intermediário: ", int_array)

# remover um valor através do índice
int_array.pop(0)
print("Após remover um valor:", int_array)


# compare o tamanho entre uma lista e um array
elements = list(range(100))  # definimos uma lista de 100 números
print("Tamanho da lista:", sys.getsizeof(elements))
array_from_list = array("I", elements)  # criamos um array a partir da lista
print("Tamanho do array", sys.getsizeof(array_from_list))
# out:
# Tamanho da lista: 856
# Tamanho do array 464
