# Day Forty Two

# Python None & Placeholder Notation

# None Object 
# The None object is the python's equivalent of null
# it represents the absence of a value & has no special behaviour

if 'var' in globals():
# if var exists as a global variable
    print(var)
    # print it's value
else:   
    print(None)
    # else print None

# None can be assigned to a variable & you can then check if a variable is None 
some_var = None

if some_var is None:  
    print("The Variable is null.")
    # this get's printed    
else:
    print("The Variable isn't null.")
    
# we can also, confirm that None is indeed an object, with the type() function
print(type(None))   
# <class 'NoneType'>  

# Placeholder notation
# placeholder notation can be thought of as a substitution method for variable values, in a string
# used with print, you can display a custom string that changes with regards to the values the variables are set too
statement_one = "commitment"
statement_two = "changing myself"
print("My two favourite things are %s and %s" % (statement_one,statement_two))
# prints string with placeholders replaced, with variable values
