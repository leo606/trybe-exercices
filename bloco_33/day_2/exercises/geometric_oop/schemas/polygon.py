from abc import ABC, abstractmethod


class Polygon(ABC):
    @abstractmethod
    def area(self):
        raise NotImplementedError

    def perimeter(self):
        raise NotImplementedError
