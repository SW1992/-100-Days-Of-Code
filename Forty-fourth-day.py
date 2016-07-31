# Day Forty Four

# Python Math
# python has several different Math functions for performing different operations

# abs() function
# the built in abs function, can be used to find the absolute value of it's input (it's distance from zero)
x = 5
print("Absolute Value:", abs(x))
# Absolute Value: 5

# Math module
# I will cover modules at a later date 
# but the math module basically provides lot's of different functions for performing mathematical procedures, once imported
# I will cover some of the most commonly used
import math, random
# import math & random modules

# ceil()
# the ceil method of the math module, allows you to round a decimal point number up to the nearest integer
y = 7.5
print("Round Up:", math.ceil(y))
# y get's rounded up to 8

# floor()
# the floor method of the math module, allows you to round a decimal point number down to the nearest integer
# intrestingly though both methods return whole numbers, the data type of the number returned by each is a float
print("Round down:", math.floor(y))
# y get's rounded down to 7

# sqrt()
# the square root method returns the square root of the specified value
z = 100
print("Square Root:", math.sqrt(z))
# prints 10.0, because 10 x 10 = 100

# pow()
# the power method returns a first argument, raised to the power of a second argument
# both methods return a number of the float data type, which is the reason for the added decimal point
print("Squared:", math.pow(20,2))
# prints 400.0, because 20 x 20 = 400 
 
# random()
# the random method of the random module, produces a random decimal number between 0 & 1.0
# it can be useful for logic in determining outcomes, dependent on the value it produces
random_num = random.random()
# generates random number
print("Random Number:", random_num)
# prints random number


