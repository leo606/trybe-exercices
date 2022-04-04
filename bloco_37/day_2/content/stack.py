class Stack:
    def __init__(self):
        self._data = list()

    def size(self):
        return len(self._data)

    def is_empty(self):
        return not bool(self.size())

    def push(self, value):
        self._data.append(value)

    def pop(self):
        if self.is_empty():
            return None

        value = self._data[-1]
        del self._data[-1]
        return value

    def peek(self):
        if self.is_empty():
            return None

        return self._data[-1]

    def clear(self):
        self._data.clear()

    def __str__(self):
        str_items = ""
        for index, element in enumerate(self._data):
            str_items += str(element)
            if index < len(self._data) - 1:
                str_items += ", "
        return str_items
