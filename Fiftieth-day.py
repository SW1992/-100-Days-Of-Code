# Day Fifty 
# Python String Methods 
# their are many built in methods for string manipulation with Python, i will look at some of the most commonly used

# capitalize()
# capitalize can be used to capitalize the first character of the first word in a string 
# it will lower case all subsequent letters & words
# the method does not mutate the string, it returns a copy of the string, strings are actually immutable in python
str_one = "abc def"
print("capitalize:", str_one.capitalize())
# prints Abc def  

# lower() 
# lower can be used to lowercase all characters in a string 
print("lower:", str_one.lower())
# prints abc def

# swapcase()
# swapcase inverts the casing of characters in a string
# if a character is uppercase it will become lower & vice versa
print("swapcase:", str_one.swapcase())
# prints ABC DEF

# title()
# title will convert the first character of each word to uppercase
# all subsequent letters will be lowercased
print("title:", str_one.title())
# prints Abc Def

# upper()
# upper will convert all characters in a string to uppercase
print("upper:", str_one.upper())
# prints ABC DEF

# strip()
# strip can be used to remove all occurences of specified leading and trailing characters, from the start & end of a string
str_two = "$remove$"
print("strip:", str_two.strip("$"))
# prints remove

# replace()
# replace can used to remove all occurences of the first character supplied to it, replaced with the second character supplied to it
# optionally you can give it a max value to replace only max or less many occurences
str_three = "a whole lot of aaaaaaaa"
print("replace:", str_three.replace("a", "A"))  
# prints string with all lowercase a's replaced with uppercase A's






