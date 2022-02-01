from unicodedata import name
from Car import Car

if __name__ == '__main__':
    corolla = Car()
    corolla.license = 'AK7093'
    corolla.driver = 'Ramon Orlando'
    corolla.passenger = 5
    print(vars(corolla))

    aveo = Car()
    aveo.license = 'JM0LK1'
    aveo.driver = 'Pedro Duque'
    aveo.passenger = 4
    print(vars(aveo))