import time
import spidev


class LedDriver():

    params = { 'bus': 1, 'device': 1, 'speed': 1000, 'leds': 320 };
    sof = [ 0x00, 0x00, 0x00, 0x00 ]
    eof = [ 0xff, 0xff, 0xff, 0xff ]
    colors = [
        [ 0xff, 0x00, 0x00, 0x00 ],
        [ 0xff, 0x0f, 0x3f, 0x3f ],
        [ 0xff, 0x0f, 0x2f, 0x2f ],
        [ 0xff, 0x08, 0x1f, 0x1f ],
        [ 0xff, 0x0f, 0x3f, 0x00 ],
        [ 0xff, 0x00, 0x00, 0x3f ],
        [ 0xff, 0x00, 0x3f, 0x00 ],
        [ 0xff, 0x0f, 0x00, 0x00 ],
    ]
    spi = None

    def __init__(self):
        self.spi = spidev.SpiDev()
        self.spi.open(self.params['bus'],self.params['device'])
        self.spi.max_speed_hz = self.params['speed']


    def selectEffect(self, index):
        leds = self.params['leds']
        msg = self.sof + leds * self.colors[index] + self.eof
        #print(msg)
        self.spi.xfer(msg)


