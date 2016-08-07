# Day Fifty One
# Python String Comparision 

# string comparision functions in python can be used to evaluate a string
# and return a boolean of True or False dependent on some condition

# isalnum()
# the isalnum function can be used to check if a string is comprised only of alpha-numeric characters
# if the string contains at least one character and they are all alpha-numeric, it returns True
str_one = "Example123" 
str_two = "Some String" 
print("isalnum:", str_one.isalnum()) 
# True
print("isalnum:", str_two.isalnum())
# False, because there is a whitespace character

# isalpha()
# isaplha returns True if the string contains only alphabetic characters 
str_one = "Example"
# reset string value
print("isalpha:", str_one.isalpha())
# True
print("isalpha:", str_two.isalpha())
# False, because there is a whitespace character

# isdigit()
# isdigit returns True if the string contains only digits
str_two = "345"
# reset string value
print("isdigit:", str_one.isdigit())
# False, because the string is entirely alphabetic
print("isdigit:", str_two.isdigit())
# True

# islower()
# is lower returns True if all cased characters in the string are lowercased
str_three = "UPPER"
str_four = "lower"
print("islower:", str_three.islower())
# False, because the characters are all capitalized
print("islower:", str_four.islower())
# True

# isupper()
# is upper returns True if all cased characters in the string are capitalized
print("isupper:", str_three.isupper())
# True
print("isupper:", str_four.isupper())
# False, because the characters are all lowercased

# isspace()
# isspace returns True if the string consists only of whitespace
str_five = " "
str_six = "Letters"
print("isspace:", str_five.isspace()) 
# True
print("isspace:", str_six.isspace()) 
# False, because the string has alphabetic characters

# startswith()
# startswith returns True if a string starts with a specified prefix
print("startswith:", str_six.startswith("L"))
# True

# endswith()
# endswith returns True if a string ends with a specified suffix
print("endswith:",str_six.endswith("n"))
# False, because the string ends with an "s" not an "n"





