def get_banch():
    pass

def start_poker():
    wecome_menu=input("\nДобро пожаловать в игру покер.\n1. Выбрать стол\n2. Назад\nВыбор: ")
    if wecome_menu == "1":
        get_banch()
    elif wecome_menu == "2":
        print("Пока")
        exit
    else:
        print("Я вас не понимаю")