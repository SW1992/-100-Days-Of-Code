# Day Sixty Two
# Guess The Number  
import random # import module
num = random.randrange(1,21,1) # generate random num between 1 - 20 
guess = input("I'm thinking of a whole number between 1 & 20: ") 

def check_guess(guess,num):
    try:
        guess = int(guess) 
        # try convert to int
    except ValueError:
        guess = input("Please enter a whole number: ")
        check_guess(guess,num) 
        # call recursively until int entered
    if guess < num:
        guess = input("Too Low, Try Again: ")
        check_guess(guess,num)
    elif guess > num:
        guess = input("Too High, Try Again: ")
        check_guess(guess,num)
    elif guess > 20 or guess < 1:
        guess = input("Enter a whole number between 1 & 20: ")
        check_guess(guess,num) 
    else:
         print("Congratulations, you guessed right, the number was", num)
check_guess(guess,num) 
