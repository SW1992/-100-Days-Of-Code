# Day Thirty Five

# python Overview 
# python is a high-level, interpreted, multi-paradigm programming language.
# It was designed in the late eighties by Guido van Rossum.
# It was built with readability in mind, making frequent use of the english language, over punctation. 

# python Syntax

# indentifiers
# indentifiers, are names that can be used to indentify functions, variables, objects etc
# a python indentifier can start with uppercase or lowercase a-z chars or an _ underscore
# and be followed by zero or more letters, digits (0-9) & underscores
# chars @, $, and % are not allowed in indentifiers, they are case-sensitive & native python keywords cannot be used in them

# indentation 
# python uses indentation to denote code blocks, rather than the curly braces used in langauges like C
# all block statements must have the same level of indentation
var = 2

if (var < 2):
    print("Variable is Less than two")
    
elif (var >= 2):
    print("Variable is equal to, or more than two") 
# Variable is equal to, or more than two
    
# multi-line statements
# statements in python end with a new line, unless you specify the "\" line continuation character
# for statements in data structures, you don't need to use a line continuation character to spread them over multiple lines 
some_var = 3
some_var_two = 6
# it's also recommened to use lower_case convention for naming variables 
total = some_var + \
        some_var_two

print(total)
# 9

# strings
# you can use single or double quotes to denote single line strings in python
# you can use triple quotes to denote multi-line strings in python
# the same type of quote used to start the string must also be used to end it
some_word = 'Word'
some_sentence = "This here, is a sentence."
some_paragraph = """This is something longer.
A paragraph that is spread over a couple lines."""

# multiple statements, on a single line
# you can write multiple statements on a single line, by using a semi-colon between them
# provided the statements don't start new blocks
a = "This is Valid,"; b = "This Too";

print (a,b)
# This is Valid, This Too

# python summary
# the guiding principles of the python programming language are summed up in the Zen of python
# a list of 20 principles influential on the design of the language, which include
# "Beautiful is better than ugly"
# "Explicit is better than implicit"
# "Simple is better than complex"
# "Complex is better than complicated"
# "Readability Counts"





