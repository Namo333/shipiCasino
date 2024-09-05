import random

from data import create_connection, create_table, create_users, login_user

from games.dice import start_dice
from games.poker import start_poker
from games.blackjack import start_blackjack

PATCH='database.db'
user_id=0

def show_menu():
    profile_menu=input(f"\n\nДобро пожаловать, !\n\nВаш баланс: \n\nДля того, чтобы начать выберите игру\n1. Игра кости\n2. Покер\n3. Блэкджек\nВыбор: ")
    if profile_menu == "1":
        start_dice(score=3434)
    elif profile_menu == "2":
        start_poker()
    elif profile_menu == "3":
        start_blackjack()
    else:
        print("Я вас не понимаю! Думаю, что такакой игры нету.")

def main():
    connection=create_connection(PATCH)
    if connection:
        create_table(connection)
        while True:
            start_menu=input("\nДобро пожаловать в shipiCasinoV1! Перед началом войдите или зарегистрируйтесь.\n1. Регистрация\n2. Войти в аккаунт\nВыбор: ")
            if start_menu == "1":
                write_login=input("Введите логин: ")
                user_id=random.randint(1000, 10000)
                create_users(connection, user_id=user_id, login=write_login)
            elif start_menu == "2":
                login=input("Введите ваш логин для авторизации")
                if login_user(connection, login=login):
                    while True:
                        show_menu()
            else:
                print("Я вас не понимаю!")
    
    connection.close()

if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        print("Выход")