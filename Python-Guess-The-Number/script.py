# Day Sixty Three
# Guess The Number  
import random # import module
num = random.randrange(1,21,1) # generate random num between 1 - 20 
guess = input("I'm thinking of a whole number between 1 & 20: ") 
 
def check_guess(guess,num,guess_counter):
    guess_counter += 1 
    # another guess
    try:
        guess = int(guess) 
        # try convert to int
    except ValueError:
        guess = input("Please enter a whole number: ")
        check_guess(guess,num,guess_counter) 
        # call recursively until int entered 
    if guess > 20 or guess < 1:
        guess = input("Enter a whole number between 1 & 20: ")
        check_guess(guess,num,guess_counter) 
    elif guess < num:
        guess = input("Too Low, Try Again: ")
        check_guess(guess,num,guess_counter)
    elif guess > num:
        guess = input("Too High, Try Again: ") 
        check_guess(guess,num,guess_counter)
    else:
        print("Congratulations! you got the number in", guess_counter, "guesses") 
check_guess(guess,num, 0)  

