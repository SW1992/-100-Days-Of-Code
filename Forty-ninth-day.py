# Day Forty Nine  

# Python Dictionary Functions & Methods
# their are a number of native functions and methods for peforming different operations, with dictionaries
# i will look at some of the most commonly used

# Dictionary Functions
# len ()
# the python length function can also be used with dictionaries
# it performs the same action as it does with lists, returning the amount of items in a dictionary
dict_one = {"Name": "Josh Smith", "Age": 24}
print("The length of the dictionary is:", len(dict_one) ) 
# returns 2

# str ()
# the str method returns a printable string representation of a dictionary
print("String representation: %s"  % str(dict_one)) 
# prints string representation

# Dictionary Methods
# clear()
# clear can be used to remove all items from a dictionary, it has no return value
dict_one.clear()
# remove all items
print("The length of the dictionary is now:", len(dict_one))
# prints 0

# items ()
# if you want to return a list of a dictionaries key & value pairs, you can use the items method, in a loop 
dict_two = {"Name": "Sarah Parker", "Age": 18}
for key, value in dict_two.items():
    print("Dictionary Key:", key, " Dictionary Value:", value)
    # prints list of dictionary keys & values

# keys () 
# if you just want the keys you can use the keys method, along with list, to return a list of a dictionaries keys
print("List of keys:", list(dict_two.keys()))
# prints list of keys 

# values ()
# if you just want the values you can use the values method, along with with list, to return a list of a dictionaries values
print("List of values:", list(dict_two.values()))
# prints list of values 


