from data import create_connection, create_table, create_users

from games.dice import start_dice
from games.poker import start_poker
from games.blackjack import start_blackjack

PATCH='database.db'

def main():
    connection=create_connection(PATCH)
    if connection:
        create_table(connection)


if __name__ == "__main__":
    try:
        main()
    except KeyboardInterrupt:
        # connection.close()
        print("Выход")