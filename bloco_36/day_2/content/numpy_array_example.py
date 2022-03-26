import numpy as np

np_array = np.array([], dtype=int)

np_array = np.insert(np_array, 0, 3)
np_array = np.insert(np_array, 1, 5)
np_array = np.insert(np_array, 2, 8)

print("array com 3 elementos ->", np_array)

np_array = np.insert(np_array, 2, 2)
print("adicionando no indice 2 ->", np_array)

np_array = np.delete(np_array, 2)
print("remove indice 2 ->", np_array)
