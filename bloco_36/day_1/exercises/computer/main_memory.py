class Main_memory:
    def __init__(self):
        self.clean()

    def load(self, value):
        self.loaded_memory.append(value)

    def get(self, index):
        try:
            int(self.loaded_memory[index])
            return self.loaded_memory[index]
        except Exception:
            return 0

    def clear(self):
        self.loaded_memory = []
