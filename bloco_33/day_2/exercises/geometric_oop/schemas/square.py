from polygon import Polygon


class Square(Polygon):
    def __init__(self, side):
        self.side = side

    def area(self):
        return self.side**2

    def perimeter(self):
        return self.side * 4
