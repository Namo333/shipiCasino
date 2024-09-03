import random

def get_dice(gameStavka, score):
    yourDice = random.randint(1, 6)
    robotDice =random.randint(1, 6)
    if yourDice > robotDice:
        score += gameStavka
        print(f"\nВы выиграли! Вам выпало {yourDice}, противнику выпало {robotDice}. Теперь ваш баланс составляет {score}\n")
    elif yourDice < robotDice:
        score -= gameStavka
        print(f"\nВы проиграли! Вам выпало {yourDice}, противнику выпало {robotDice}. Теперь ваш баланс составляет {score}\n")
    else:
        print(f"\nНичья! Вам выпало {yourDice}, противнику выпало {robotDice}. Теперь ваш баланс составляет {score}\n")

def start_dice(score):
    wecome_menu=input("\nДобро пожаловать в игру кости.\n1. Кинуть кости (начать игру)\n2. Назад\nВыбор: ")
    if wecome_menu == "1":
        while True:
            stavka=int(input(f"Сколько вы хотите поставить? от 10, до 500.\nВаш баланс {score}\nВыбор: "))
            if stavka <= 10:
                print('Вы выбрали слишком мало!')
            elif stavka >= 500:
                print('Ваш ранг не позволяет выбрать больше 500!')
            else:
                get_dice(gameStavka=stavka, score=score)
                break
    elif wecome_menu == "2":
        print("Пока")
        exit
    else:
        print("Я вас не понимаю")
    