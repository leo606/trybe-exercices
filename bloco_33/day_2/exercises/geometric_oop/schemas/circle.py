from polygon import Polygon
from math import pi


class Circle(Polygon):
    def __init__(self, radius):
        self.radius = radius

    def area(self):
        return pi * (self.radius**2)

    def perimeter(self):
        return pi * (self.radius * 2)
