import random


tries_calc = 1000
tries = 1000
wincount = 0

while tries > 0:
    prizes = ["goat", "goat", "car"]
    random.shuffle(prizes)
    del prizes[random.randrange(0, 2)]
    if "car" in prizes:
        wincount += 1

    tries -= 1

print(f'After {tries_calc} simulation rounds, the win percentage when switching doors is {wincount / tries_calc * 100} %')