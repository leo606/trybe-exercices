class Conjunto:
    def __init__(self):
        self._set = [False for _index in range(1001)]

    def add(self, value):
        if not self._set[value]:
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

    def __contains__(self, item):
        return self._set[item]

    def union(self, setB):
        new_set = Conjunto()
        for index in range(1001):
            if index in self or index in setB:
                new_set.add(index)
        return new_set

    def intersection(self, setB):
        new_set = Conjunto()
        for index in range(1001):
            if index in self and index in setB:
                new_set.add(index)
        return new_set
