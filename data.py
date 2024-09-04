import sqlite3
from sqlite3 import Error

import random


PATCH='database.db'

def create_connection(db_file):
    conn = None
    try:
        conn = sqlite3.connect(db_file)
        print('Connection to SQLite DB successful')
    except Error as e:
        print(f'[ERRORS] {e}')
    return conn


def create_table(conn):
    cursor = conn.cursor()
    cursor.execute('''
    CREATE TABLE IF NOT EXISTS user (
    id INTEGER PRIMARY KEY,
    login TEXT,
    credits INTEGER
    )
    ''')
    conn.commit()

def create_users(conn, user_id, login):
    cursor = conn.cursor()
    cursor.execute('INSERT INTO user (id, login, credits) VALUES (?, ?, ?)', (user_id, login, 1000))
    conn.commit()

def uploadd_users():
    pass

def get_credits(conn):
    cursor = conn.cursor()
    cursor.execute('SELECT credits FROM user')
    credits = cursor.fetchall()
    return [credit[0] for credit in credits]

def get_user_ids(conn):
    cursor = conn.cursor()
    cursor.execute('SELECT id FROM user')
    user_ids = cursor.fetchall()
    return [user_id[0] for user_id in user_ids]

