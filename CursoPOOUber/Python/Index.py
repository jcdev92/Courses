from Car import Car
from Account import Account

    # if __name__ == '__main__':              PRIMER SCRIPT PRACTICO DE CLASES EN PYTHON
    #     corolla = Car()
    #     corolla.license = 'AK7093'
    #     corolla.driver = 'Ramon Orlando'
    #     corolla.passenger = 5
    #     print(vars(corolla))
    # 
    #     aveo = Car()
    #     aveo.license = 'JM0LK1'
    #     aveo.driver = 'Pedro Duque'
    #     aveo.passenger = 4
    #     print(vars(aveo))

if __name__=='__main__':
    Yaris = Car('RTM12I', Account("Ignacio Jose","k41jp23h"))
    print(vars(Yaris))
    print(vars(Yaris.driver))