def even_numbers(n):
    pares = 0

    for number in range(1, n):
        if number % 2 == 0:
            pares += 1

    return pares


print(even_numbers(5))
