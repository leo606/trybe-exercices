def even_numbers(n):
    pares = 0

    for number in range(n):
        if number % 2 == 0:
            pares += 1

    return pares


def even_numbers_rec(n):
    if n == 1:
        return 0
    elif n % 2 == 0:
        return 1 + even_numbers_rec(n - 1)
    else:
        return even_numbers_rec(n - 1)


print(even_numbers(6))
print(even_numbers_rec(6))
