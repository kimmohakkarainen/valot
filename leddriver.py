import time
import spidev


class LedDriver():

    params = { 'bus': 1, 'device': 1, 'speed': 1000, 'leds': 320 };
    sof = [ 0x00, 0x00, 0x00, 0x00 ]
    eof = [ 0xff, 0xff, 0xff, 0xff ]
    spi = None

    def __init__(self):
        self.spi = spidev.SpiDev()
        self.spi.open(self.params['bus'],self.params['device'])
        self.spi.max_speed_hz = self.params['speed']


    def selectColor(self, color):
        bright, blue, green, red = color
        leds = self.params['leds']
        color = [int(bright), int(blue), int(green), int(red)]
        msg = self.sof + leds * color + self.eof
        self.spi.xfer(msg)
