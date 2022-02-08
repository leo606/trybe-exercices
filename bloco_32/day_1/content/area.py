PI = 3.14  # PI é uma "constante" em nosso módulo


def square(side):
    """Calculate area of a square."""
    return side * side


def rectangle(length, width):
    """Calculate area of a rectangle"""
    return length * width


def circle(radius):
    """calculate area of circle"""
    return PI * radius * radius


if __name__ == "__main__":
    print("Área do quadrado:", square(10))
    print("Área do retângulo:", rectangle(2, 2))
    print("Área do círculo:", circle(3))
