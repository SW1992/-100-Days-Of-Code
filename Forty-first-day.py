# Day Forty One 

# Python Dynamically Typed & Strongly Typed
# Python is a dynamically typed & strongly typed programming langauge
# I will cover each of these & look briefly at the contrast between them & statically typed & weakly typed 

# Dynamically Typed
# Because Python is dynamically typed, so you don't have to declare variable types before use
# infact the variable itself doesn't even have a type, only the variable value does
# the variable is just a value bound to a name, which gives you versatility to reassign variables values of different types, as needed
some_var = "string"
print(type(some_var))
# <class 'str'>
some_var = 99 
print(type(some_var)) 
# <class 'int'>
# the same some_var variable, has been re-assigned a value of a different type

# This contrasts with statically typed languages, where the variable itself will be of a paticular type, this must be specified when the variable is declared 
# type checking is also done at compile-time with statically typed languages, but done at run-time with dynamically typed langauges
 
# Strongly Typed 
# Python is also, strongly typed, this means that operations you perform have to be compatible with the data type/types you are performing them on
# str = "Hi" + 55 
# would raise a type error in python, because you cannot concatenate strings & integers
# strongly typed langauges will raise an error if you're performing an operation like this that it considers wrong

# by contrast, in a weakly typed language like Javascript, this kind of operation would be allowed
# var str = "Hi" + 55;
# type conversion would be performed by the interpreter or compiler, converting the number to a string, 
# to allow you to perform such an operation, storing a concatenated string "Hi55"
# with weakly typed languages an unexpected type conversion could cause unexpected results
# which would fall silent, rather than raise an error, which could lead to difficult debugging



