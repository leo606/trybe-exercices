class Conjunto:
    def __init__(self):
        self._set = [False for index in range(1000)]

    def add(self, value):
        self._set[value] = True
