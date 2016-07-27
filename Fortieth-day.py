# Day Forty

# Python Arithmetic & Assignment Operators

# Arithmetic Operators
# Python has several operators you can use for modifying the value of operands
# beyond the basic +, -, * (multiplication) & / (divison), it has

# % modulus
# this operator will divide a dividend, by a divisor, & return the remainder of that divison
# modulus can be useful for determining, wether a given number is even or odd
mod_even = 4 % 2 
# 0, because 2 goes into 4 twice, with 0 left over
mod_odd = 9 % 8
# 1, because 8 goes into 9 once, with 1 left over
def odd_or_even(remainder):
    if remainder % 2 == 0: 
        return True
    else:
        return False
print("is Even:", odd_or_even(mod_even))
# function returns true, because 0 is an even number
print("is Even:", odd_or_even(mod_odd))
# function returns false, because 1 is an odd number

# // floor division
# this operator acts the same as normal division, but cuts off the results decimal point value, returning an integer
float = 9
int = 2
print("normal division:", float / int)
# 4.5
print("floor division:", float // int)
# 4, instead of 4.5

# ** exponent 
# exponent is the equivalent of the "to the power of" operator in python, it returns the first operand to the power of the second operand
power_of = 10 ** 2
# set equal to 10^2
print("exponent:", power_of)
# 100

# Assignment Operators
# there are several short hand assignment operators in Python, like those in javascript
# beyond the again, basic += (add assign), -= (subtract assign), *= (multiply assign) & /= (divide assign) there is

# &= modulo assign
# modulo assign performs a modulo operation with the operands to the left & right of it & assigns it back into the operand on the left
x = 7 
y = 5
x %= y
# x = x % y
print("modulo assign:", x)
# 2

# //= floor assign
# floor assign performs a floor division with the operands to the left & right of it & assigns it back into the operand on the left
a = 11
b = 2
a //= b
# a = a // b
print("floor assign:", a)
# 5

# **= exponent assign
# exponent assign performs a power of operation, with operands on the left & right of it & assigns it back into the operand on the left
n = 6
z = 2
n **= z
# n = n ** z
print("exponent assign:",n)
# 36  

# also, beyond normal assignment, you can also peform multiple assignment
# to assign multiple variables the same value
str = str_two = str_three = "These aren't the droids you're looking for"
print(str_three)
# These aren't the droids you're looking for

# or assign different variables different values, all at once
str,int = "The Answer is", 42
print(str,int)  
# The Answer is 42  









