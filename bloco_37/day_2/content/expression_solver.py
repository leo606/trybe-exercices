from stack import Stack


def solve_expression(expr):
    stack = Stack()

    tokens_list = expr.split(" ")

    for token in tokens_list:
        if token == "+":
            # sum:
            result = stack.pop() + stack.pop()
            stack.push(result)
        elif token == "*":
            result = stack.pop() * stack.pop()
            stack.push(result)
        else:
            # add number
            stack.push(int(token))
    return stack.pop()


print(solve_expression("5 10 + 2 *"))
