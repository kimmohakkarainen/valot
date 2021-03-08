import json


class ValoModel():

    model = []
    definitionsFile = 'definitions.json'

    def __init__(self):
        self.readModelFromDisk()


    def writeModelToDisk(self):
        with open(self.definitionsFile,'wb') as file:
            file.write(json.dumps(self.model).encode('utf-8'))


    def readModelFromDisk(self):
        with open(self.definitionsFile, 'rb') as file:
            data = file.read()
            self.model = json.loads(data.decode('utf-8'))

    def changeColor(self, color):
        print('changeColor')
        print(color)
        id = color['id'] if 'id' in color else 0
        if id == 0:
            color['id'] = len(self.model)
            self.model.append(color)
        elif 0 <= id < len(self.model):
            self.model[id] = color
        else:
            print('id out of range ' + id)
        self.writeModelToDisk()


    def getColor(self, index):
        if index > 0 and index < len(self.model):
            row = self.model[index]
            return (row['bright'], row['blue'], row['green'], row['red'])
        else:
            return (255, 0, 0, 0)



    def modelToJSON(self, index):
        for button in self.model:
            if index == button['id']:
                button['active'] = True
            else:
                button['active'] = False
        return json.dumps(self.model).encode()


