class Tv:
    def __init__(self, size):
        self.volume = 50
        self.channel = 1
        self._size = size
        self.on = False

    def volume_up(self):
        if self.volume < 99:
            self.volume += 1

    def volume_down(self):
        if self.volume > 0:
            self.volume -= 1

    def change_channel(self, channel):
        if 1 <= channel <= 99:
            self.channel = channel

    def power_switch(self):
        self.on = not self.on
