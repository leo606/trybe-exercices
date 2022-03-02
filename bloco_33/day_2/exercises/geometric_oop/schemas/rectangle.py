from polygon import Polygon


class Rectangle(Polygon):
    def __init__(self, height, width):
        self.height = height
        self.width = width

    def area(self):
        return self.width * self.height

    def perimeter(self):
        return (self.height * 2) + (self.width * 2)
