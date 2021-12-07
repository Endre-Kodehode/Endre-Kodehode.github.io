
# 4. lag en klasse som har fem eller flere funksjoner i seg.

class Person:
    def __init__(self, name, age, location, hobby): #generer en person med disse atributtene
        self.name = name
        self.age = age
        self.location = location
        self.hobby = hobby

    def birthday(self): #vis alder når person fyller år
        print(self.age + 1)

    def nameLength(self): #vis lengde på navn
        print(len(self.name))

    def printHobby(self): #vis personens hobby
        print(f"{self.name}'s hobby is {self.hobby}")

    def printLocation(self): #vis personens bosted
        print(f"{self.name}'s current location is {self.location}")


# 5. lag en instance av denne klassen.


tom = Person("Tom", 18, "Stavanger", "Golf")


# 6. lag en funksjon som spawner/lager flere instances.

def personMaker(name, age, location, hobby):
    name = Person(name, age, location, hobby) #instancer en Person
    
personMaker("Trond", 22, "Sola", "Bil")




# 7. bruk dine nye instancer og lag et lite tekstbasert spill ut av det. Noen idéer: random int, trilling av terninger, equipment som modifiserer variabler (list append), bekjempe instances.




##### GOD 1.0 #####


#Vær Gud, lag folk - drep folk.


#random til å drepe tilfeldige folk
import random
#Object liste over dine tilbedere
peopleList = []
#hele spillet i en funksjon.
def god():
    #while (True) loop som kjører til den når en break kommando
    while (True):
        #gamestate avgjør videre progresjon
        gamestate = input("Welcome! Type (S) to stop game, (M) to make a new person, (L) to list your people, or (K) to kill a random person. ").upper()
        if (gamestate == "S"):
            print("Goodbye, thanks for playing!")
            break
        #Lagrer inputs som variabler og sender de videre til Person classen som parametre. Appender objektet til listen og tilbedere.
        if (gamestate == "M"):
            inputname = input("Name? ")
            age = input("Age? ")
            location = input("Location? ")
            hobby = input("Hobby? ")
            
            
            #locals() for å gi navnet på Person instance utfra verdien på "inputname".. 
            # kronglete? En bedre måte å gjør dette på?
            # Det virker ihvertfall...
            
            locals()[inputname] = Person(inputname, age, location, hobby) 
            peopleList.append(locals()[inputname])
            print(f"{inputname} has been added to your flock! Congratulations!")
            continue #continue tar deg til toppen av while loopen
        if (gamestate == "L"):
            #Hvis peopleList er tom
            if (peopleList == []):
                print("No people added yet. Press 'M' to add some people to your flock!")
                continue
            else:
                #Looper over objects i peopleList og lister alle attributter med __dict__
                for people in peopleList:
                    print(people.__dict__)
                continue
        if (gamestate == "K"):
            #Hvis peopleList er tom
            if (peopleList == []):
                print("No people added yet. Press 'M' to add some people you can kill.")
                continue
            else:
                #genererer er tilfeldig tall innenfor index rangen til peopleList
                killnumber = random.randint(0, len(peopleList)-1) #-1 siden len() teller fra 1
                #Tilfredsstillende beskjed om skjebnen til ditt tilfeldige offer
                print(f"A mighty bolt of lightning strikes {peopleList[killnumber].name} resulting in instant death. You watch in glee.")
                print(f"It is clear that {peopleList[killnumber].hobby} does NOT please you, and {peopleList[killnumber].location} is not a safe place to be!")
                #slett valgt index fra peopleList
                del peopleList[killnumber] 
                continue  
        else:
            #plukker opp invalid inputs
            print("Sorry, not a valid input, try again.")
        
god()

# Husk å kommentere koden.