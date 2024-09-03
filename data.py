import sqlite3
from sqlite3 import Error

import random

PATCH='database.db'

connection=None
try:
    connection=sqlite3.connect(PATCH)
    cursor = connection.cursor()
    print('Connection to SQLite DB successful')
except Error as e:
    print(f'[ERRORS]{e}')


cursor.execute('''
CREATE TABLE IF NOT EXISTS user (
id INTEGER PRIMARY KEY,
credits INTEGER
)
''')

id_user=random.randrange(100)

def create_users():
    cursor.execute('INSERT INTO user (id, credits) VALUES (?, ?)', (id_user, 1000))
    connection.commit()

def uploadd_users():
    pass

def get_credits():
    cursor.execute('SELECT credits FROM user')
    credits=cursor.fetchall()
    for user_credits in credits:
        result=list(map(int, user_credits))
        return result

def get_userId():
    cursor.execute('SELECT id FROM user')
    user=cursor.fetchall()
    for user_id in user:
        result=list(map(int, user_id))
        return result

