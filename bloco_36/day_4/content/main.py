from Conjunto import Conjunto

if __name__ == "__main__":
    set1 = Conjunto()
    set2 = Conjunto()
    values1 = list(range(16))
    values2 = list(range(10, 21))

    for value in values1:
        set1.add(value)

    for value in values2:
        set2.add(value)

    print(set1)
    print(set2)
    print()

    print(set1.intersection(set2))
