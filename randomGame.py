import random
import sys
count=0
secret_number = random.randint(1, 100)
guess = None

while guess != secret_number:
    guess = int(input("Enter your guess (1-100): "))
    if guess < secret_number:
        print("Too low!")
    elif guess > secret_number:
        print("Too high!")
    count+=1
    if count>5:
        print("No chance left, try again!")
        print("The Orignal Number was:",secret_number)
        sys.exit()
print("Correct! You guessed it!")