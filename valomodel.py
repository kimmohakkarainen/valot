import json

definitions = [
    ['OFF', 'pois päältä', 'off'],
    ['Kirkas', 'kirkas valaistus', 'kirkas'],
    ['keski', 'keskiteho', ''],
    ['himmeä', 'himmeä valaistus', ''],
    ['white', 'Faint red color', ''],
    ['changing', 'Faint red color', ''],
    ['blink', 'Faint red color', ''],
]


def createButton(id, name, text, footer, variant='primary'):
    retval = dict();
    retval['id'] = id
    retval['variant'] = variant
    retval['text'] = text
    retval['footer'] = footer
    retval['name'] = name
    retval['active'] = False
    return retval

class ValoModel():

    model = []

    def __init__(self):
        for index, value in enumerate(definitions):
            name, text, footer = value
            self.model.append(createButton(index, name, text,footer))


    def modelToJSON(self, index):
        for button in self.model:
            if index == button['id']:
                button['active'] = True
            else:
                button['active'] = False
        return json.dumps(self.model).encode()


