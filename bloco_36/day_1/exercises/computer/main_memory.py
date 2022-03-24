class Main_memory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        value = int(self.loaded_memory[index])
        if int(value):
            return value
        else:
            return 0

    def clean(self):
        self.loaded_memory = []
