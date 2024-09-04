    create_table()

    while True:
        start_menu=input("\nДобро пожаловать в shipiCasinoV1! Перед началом войдите или зарегистрируйтесь.\n1. Регистрация\n2. Войти в аккаунт\nВыбор: ")
        if start_menu == "1":
            pass
        elif start_menu == "2":
            pass
            if username:
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