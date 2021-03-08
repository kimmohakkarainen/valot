from threading import Thread, Condition
import time
from valomodel import ValoModel
from leddriver import LedDriver


class ValoThread(Thread):

    model = ValoModel()
    index = 0
    changed = False
    condition = Condition()
    leddriver = LedDriver()

    def __init__(self):
        super().__init__()


    def changeState(self, selected):
        self.condition.acquire()
        self.index = selected['id']
        self.changed = True
        self.condition.notify()
        self.condition.release()


    def changeColor(self, data):
        self.model.changeColor(data)
        self.condition.acquire()
        self.index = data['id']
        self.changed = True
        self.condition.notify()
        self.condition.release()


    def getStateJSON(self):
        return self.model.modelToJSON(self.index)


    def run(self):
        while(True):
            index = 0
            self.condition.acquire()
            if self.changed:
                index = self.index
                self.changed = False
            else:
                self.condition.wait()
                index = self.index
                self.changed = False
            self.condition.release()
            print(index)
            self.leddriver.selectColor(self.model.getColor(index))
