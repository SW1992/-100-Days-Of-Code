# Day Fifty Five  

# Python Exceptions 
# when executing a script it is common for unexpected errors or exceptions to be raised
# you can handle these exceptions in python with a try/except statement
# these are equivalent to the try...catch statement in javascript

# try/except
# with a try except block, the code in the try block will first be tested 
# this statement or statements will be run normally, until an exception is raised 
# when/if this happens the preceeding except block will then be used for handling the error
variable = "Some String"
try:
    print(variabel)
    # this mispelling will raise a NameError     
except NameError as error:
# this statement will catch the error & the preceeding block will then handle it
    print(error)

# built in exceptions
# their are many built in exceptions in python NameError is just one of many
# a NameError is raised when a indentifier name cannot be found globally or locally
# another is a TypeError which occurs when you try to perform an operation on a data type that doesn't support it
try:
    print("Foo" + 42)
    # this will raise a TypeError     
except TypeError as error:
    print(error)
    # handle error    

# finally
# a finally block can be used much like in javascript, to execute some block of code 
# after the try/except block, regardless if an exception was raised or not
try: 
    print(20 / 0)
    # this will raise a ZeroDivisionError
    # another built in exception that occurs when you try to divide or modulo a number by zero
except ZeroDivisionError as error:
    print(error) 
    # handle error
finally:
    print("Print me regardless")
    # executed regardless