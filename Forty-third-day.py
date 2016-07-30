# Day Forty Three

# Python Range & Enumerate 

# range() function 
# the python range function can be thought of as a form of loop
# it loops through & produces list of integer values
# it takes three parameters, start, end & step
# if you specify only an end value, it will loop up to the number (exclusive)
# starting from 0, as start defaults at 0 if it's omitted
for w in range(3):
    print("w range:", w)  
    # prints 0, 1, 2
# if you specify an start value & end value it will start from start & loop up to end
for x in range(0,3):
    print("x range:", x)
    # prints 0, 1, 2
# if you specify a step value, it will use that to decide the incremental difference between each number it produces
for y in range(3,15,3):
    print("y range:", y) 
    # prints 3, 6, 9, 12
# you can also count downwards with range, aswell as upwards
for z in range(5,-1,-1):
    print("z range:", z)
    # prints 5, 4, 3, 2, 1, 0
    
# enumerate() function  
# the native enumerate function will display the associative index & item, for each item in a list
fruits = ["Apple", "Mango", "Orange"]

print("Enumerate:", end = " ")
for item in enumerate(fruits):
    print(item, end = " ")
    # Enumerate: (0, "Apple") (1, "Mango") (2, "Orange")

