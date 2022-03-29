class Conjunto:
    def __init__(self):
        self._set = [False for _index in range(1001)]

    def add(self, value):
        self._set[value] = True

    def __str__(self):
        values = "{"
        for index, value in enumerate(self._set):
            if value:
                values += str(index)
                if index < len(self._set) - 1:
                    values += ", "
        values += "}"
        return values
