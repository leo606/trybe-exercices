class Conjunto:
    def __init__(self):
        self._set = [False for _index in range(1001)]

    def add(self, value):
        self._set[value] = True
