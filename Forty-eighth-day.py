# Day Forty Eight

# Python Dictionaries
# having covered dictionaries briefly in my data types section
# I will look at some of the things i didn't look at then

# you can create an empty dictionary in python with {}
empty_dict = {} 
 
# Updating Dictionaries
# their are a couple ways you can update dictionaries in python
dict = {"Name":"Lucy Smith", "Age":24, "Profession":"Receptionist"}
# you can reset the value of exsisting entries
dict["Profession"] = "Actuary"
# changes value of exsisting Professsion key
print("Her new job is:", dict["Profession"])
# prints Actuary
# you can add entirely new entries
dict["Salary"] = "32,825"
# add's Salary key & value to dictionary
print("Her new salary is:", dict["Salary"])
# prints 32,825

# Deleting Dictionaries
# you can delete entire dictionaries in one go using the del statement
del empty_dict
# deletes entire dictionary
# you can also delete individual dictionary entries
del dict["Salary"]
# delete Salary Key & Value from dictionary
print("The Dictionary is now:", dict)
# prints updated dictionary 

# Dictionary Key & Value Rules
# Dictionary values have no rules or restrictions with regards to data type
# they can be equal to any user defined data type, or even built in objects
some_dict = {"one": 23, "two": 45.6, "three":["list value"], "four":None}
# all valid values
# Dictionary keys however, are stricter, firstly you're not allowed to have duplicate keys
another_dict = {"Name":"Sam", "Name":"Smith"}
print(another_dict)  
# in this case the last assignment takes priority 
# so the dictionary contains only "Name":"Smith"  
# keys must also be an immutable data type, so can only be either strings, numbers or tuples





