from data import *

from games.dice import start_dice
from games.poker import start_poker
from games.blackjack import start_blackjack

def registration():
    login=input("Введите логин: ")
    return login

def loginin():
    log=input("Введите ваш логин, для входа: ")


def menu():
    while True:
        profile_menu=input(f"\n\nДобро пожаловать, {get_userId()}!\n\nВаш баланс: {get_credits()}\n\nДля того, чтобы начать выберите игру\n1. Игра кости\n2. Покер\n3. Блэкджек\nВыбор: ")
        if profile_menu == "1":
            start_dice(score=credits)
        elif profile_menu == "2":
            start_poker()
        elif profile_menu == "3":
            start_blackjack()
        else:
            print("Я вас не понимаю! Думаю, что такакой игры нету.")

def main():
    create_users()

    while True:
        start_menu=input("\nДобро пожаловать в shipiCasinoV1! Перед началом войдите или зарегистрируйтесь.\n1. Регистрация\n2. Войти в аккаунт\nВыбор: ")
        if start_menu == "1":
            registration()
        elif start_menu == "2":
            loginin()
        else:
            print("Я вас не понимаю!")

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        connection.close()
        print("Выход")