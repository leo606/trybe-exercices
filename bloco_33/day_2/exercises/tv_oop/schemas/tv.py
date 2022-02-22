class Tv:
    def __init__(self, size):
        self.volume = 50
        self.channel = 1
        size = size
        self.on = False

    def volume_up(self):
        if self.volume < 99:
            self.volume += 1
