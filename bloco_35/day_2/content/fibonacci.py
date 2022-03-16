start = [0, 1]


def fib(n):
    for _index in range(2, n):
        start.append(start[-1] + start[-2])
    return start[-1]


print(fib(10))
