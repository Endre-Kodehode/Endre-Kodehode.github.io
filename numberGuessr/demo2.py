import random

difficulty = 10
guessList = []

while (True):
    gamestate = input("Type 'P' to play, 'D' to set difficulty or 'E' to exit: ").upper()
    if (gamestate == "E"):
        print("Thanks for playing!")
        break
    if (gamestate == "D"):
        print(f"Current difficulty is {difficulty}")
        difficulty = int(input("Set a new difficulty: "))
        print(f"Difficulty set to {difficulty}")
        continue
    if (gamestate == "P"):
            
            randomNumber = random.randint(1, difficulty)
            
            while (True):
                
                guess = int(input(f"Guess a number between 1 and {difficulty}: "))
                guessList.append(guess)
                
                if (guess > randomNumber):
                    print("Your guess was too high.")
                    continue
                elif (guess < randomNumber):
                    print("Your guess was too low.")
                    continue
                else:
                    print(f"You guessed the correct number, {randomNumber}, in {len(guessList)} tries!")
                    print(f"Your guesses were {guessList}")
                    break
            continue
