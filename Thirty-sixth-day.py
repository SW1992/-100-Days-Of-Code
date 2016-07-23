# Day Thirty Six

# Python User Input 

# raw_input
# the python raw_input function was deprecated in python 3.0, the input functions now takes it's place.

# the input() function
# you can use the python input() function to prompt a user to enter some information
# it will display a given string on the screen & wait to read the users response
# the information entered by the user, will be read as a text string
# this can be assigned to a variable & later referenced, like any other variable value
user_name = input("Please enter your name: ")
# stores user input as string
print("Hello", user_name + ", pleased to meet you.")
# displays custom response message 

# custom seperator
# by default the python print function will seperate output of mutlple values, with a single space.
# you can specify a custom seperator, with the sep parameter
fav_block = input("Now, enter your favourite Holywood Blockbuster: ")
print(fav_block, "nice", "choice.", sep = " $ ")  
# displays output seperated by dollar signs 

# custom ending
# the print functions output will automatically add newline character at the end of a line by default
# so that any further print statements will print on the next line
# you can use the end parameter to specify your own character to end the string text with
fav_actor = input("And your favourite actor: ") 
print("Awesome,", fav_actor, "is very talented", end = "!\n")
# displays output, with exclamation mark as last string character in line, ending the line with a newline character




