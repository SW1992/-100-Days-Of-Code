# Day Thirty Nine

# Python Data Type Conversion
# Sometimes when manipulating data, in python, or in other programming languages 
# You'll want to convert it's type, to another data type, to perform some type dependent operation on it
# In python, to convert data types, you use the data type name or a shortened version of it as a function
# The type converter function will return a new object that corresponds to the type you wanted

# In Python the three most common type conversion functions are:

# int()  
# the int function will cast a given input to the integer data type
to_int = int(25.0)
# will store 25
# floats converted to integers, have their decimal point value truncated & become whole numbers

# float()
# the float function will cast a given input to the floating-point data type
to_float = float("50")
# will store 50.0  

# str()
# the str function will cast a given input to the string data type
to_string = str(100)
# will store "100"

# type() 
# you can determine what data-type class a variables value belongs to, by using the native type() function
print("Data Type: ", type(to_int))
# Data Type: <class 'int'> 
print("Data Type: ", type(to_float))
# Data Type: <class 'float'>
print("Data Type: ", type(to_string))
# Data Type: <class 'str'> 

# user input & type conversion
# when you ask a user to type some numbers, using the input() function
# the data you get back will be of the type 'str', if you tried to do math with it you wouldn't get the result you wanted
# if you tried to add them together you'd just get a concatenated string, if you tried to subtract one from the other you'd get a type error
# one of the great uses of data-type conversion is converting string types to number types, so you can perform arithmetic on them
first_num = input("Please enter a first digit: ") 
second_num = input("Please enter a second digit: ")
third_num = input("Please enter a final digit: ")
sum_of_numbers = first_num + second_num + third_num
print(sum_of_numbers)  
# here it will simply print a concatenated string, consiting of all three inputs
sum_of_numbers = int(first_num) + int(second_num) + int(third_num)
print(sum_of_numbers)
# here it will print the sum of all three inputs, like we wanted






