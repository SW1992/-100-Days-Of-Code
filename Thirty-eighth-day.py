# Day Thirty Eight

# Python Data types
# In Python & in other programming langauges, the type of data that is stored in memory, defines what operations are possible on it.
# Python has five standard Data types, these are: 

# Numbers 
# the main two types it supports are integers (whole numbers)
short = 10
# long or short integers, are supported naturally
long = 50000000
# and floating-points (decimal point numbers) 
float = 5.0
# it also supports complex numbers
com = 3.14j  

# Strings 
# in single quotes
str_single = 'some string'
# and double quotes
str_double = "another string"
# the + sign is the string concatenation operator in python
str_concat = str_single + ", " + str_double
# the * sign is the repetition operator 
str_repeat = "repeat" * 2
print(str_concat)
# some string, another string
print(str_repeat)  
# repeatrepeat

# Lists
# lists are similar to arrays, in javascript, and are contained in [] square brackets 
# the comma seperated items, contained in lists, can be of different data types
list = ["stuff", 10, 4.0]
# list values can be accessed with the slice operator, [] for individual values
print(list[0])
# prints first value in list
# and [:] for a number of values
print(list[1:])
# prints list elements starting from index 1, till the end of the list
# you can also use the concatenation & repetition operator with lists
another_list = ["more stuff", 20]
print(list + another_list)
# prints concatenated list
print(another_list * 2)
# prints list twice  
# note: the slice operator can also be used with strings

# Tuples
# similar to lists, they can contain a number of comma seperated items, of different data type
# but tuples are enclosed in () parentheses & are immutable, so can be thought of as a form of read-only list
tuple = ("Joe Bloggs", 42)
another_tuple = ("Mary Jones", 45) 
# you can also use * & + with tuples
print(tuple * 3)
# print tuple contents three times
print(tuple + another_tuple)
# print concatenated tuple 
# because they're immutable though, you can't change, then contents of a tuple with an item assignment []
# tuple[0] = "Mark Jones"
# would raise a synax error
# note: item assignment is possible with a list

# Dictionaries
# dictionaries are like objects in Javascript
# they are associative arrays consisting of key: value pairs, enclosed in {} curly braces
dict = {"key": 99, "keyTwo": 150}
# values can be accessed with [] square brackets
print(dict["key"]) 
# 99 























