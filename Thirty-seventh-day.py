# Day Thirty Seven

# Python Errors 
# their are three major categories of error than can happen, when programming in python

# Syntax Errors
# Synatx errors are probably the most common & straightforward to fix
# they occur when you write code that doesn't conform to the language rules of python
# when the interpreter finds a syntax error it halts & reports the error, without running the program
# a common example would be accidentally missing a closing bracket in a print statement  

# print("this will raise a syntax error"  
# syntax error: unexpected EOF while parsing, would occur, because the print statement brackets haven't been closed

print("this will not raise a synax error")   
# this will not raise a syntax error

# or forgetting to properly terminate a string literal

# print("and this) 
# syntax error: EOL while scanning string literal, would occur, because we didn't close the string properly

print("this won't either")
# this won't either

# Runtime Errors 
# Runtime errors are also common
# as the name suggests, they occure during execution time of a program
# unlike with a syntax error, the interpreter will run the program, but it will halt at the error & raise an exception
# a common example would be, accidentally mispelling a variable name, when trying to reference it 
variable = "Some value"  

# print(variabel)
# Raises NameError: name 'variabel' is not defined, because no variable with the name "variabel" exists

# variable, however, does
print(variable)
# Some value

# Logical Errors
# logical errors are harder to determine & fix, because the program will run correctly & no error will be reported by the interpreter
# but the output of the program will not be what you expected 
# so fixing them requires meticulous examination of relevant parts of your code, to determine what bit or bits are producing the unexpected result
# a common example is not explicity declaring precendence in a mathematical operation, say we wanted to print a operation that was equal to 100
num = 10 

print(num * 5 + 5 ) 
# prints 55, because the multiplication here has precendence over the addition, not what we want

print(num * (5 + 5)) 
# prints 100, because we've surrounded the addition with parentheses, so it's done before the multiplication, like we wanted














