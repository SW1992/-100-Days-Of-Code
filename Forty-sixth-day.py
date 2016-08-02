# Day Forty Six

# Python Lists
# As i've covered lists briefly in my data types program
# i will today into some of the stuff i didn't look at then 

# List Assignment 
# you can assign a single list item to a single variable 
person_info = ["Joe Bloggs", 1964, "5ft 7"]
person_name = person_info[0]
# single assignment
print("The first guy is:", person_name) 
# The first guy is: Joe Bloggs

# or multiple list items, to multiple variables
(another_name, another_birtdate, another_height) = ["John Doe", 1970, "5ft 9"]
# multi assignment
print("The second guy is:", another_name)
# The second guy is: John Doe

# Updating Lists
# you can update lists, changing individual elements, by reassigning a slice of the list
further_person_info = ["Jack Smith", 1990, "6ft"]
print("The third guys name was:", further_person_info[0])
# The third guys name was: Jack Smith
further_person_info[0] = "Jack Ryder"
# update name
print("Now it's:", further_person_info[0]) 
# Now it's: Jack Ryder

# Deleting List Elements
# to delete list elements you can use the del statement, provided you know exactly what index the item you want to delete is at
print("The list was:", further_person_info)
# prints list as it was before element deletion
del further_person_info[2]
# delete item at second index from list
print("Now the list is:", further_person_info)
# now the list has only a name & birthdate left








