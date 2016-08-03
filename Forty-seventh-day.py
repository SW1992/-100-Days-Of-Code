# Day Forty Seven

# Python List Functions & Methods
# There are various built in funcions & methods for working with lists in python
# I will look at some of the most commonly used

# List Functions
# len()
# len is the python length function 
# it returns the amount of items in a list
list = ["Some String", 2.5, 15]
print("list's length is:", len(list))
# prints 3

# max()
# the max function returns the number in a list with the highest value
num_list = [25,50,75]
print("The largest number is:", max(num_list))
# prints 75

# min()
# the min function returns the number in a list with the lowest value
print("The smallest number is:", min(num_list))
# prints 25

# List Methods
# append()
# append add's a value onto the end of the list, updating the exsisting list
list.append("Another String")
print("Updated list:", list)
# prints updated list

# pop()
# pop can be used to pop values off of a list
# it will remove a list item at given index in the list, returning this removed item
print("Removed Item:", list.pop())
# prints Another String, the item that was removed
# by default pop removes the last item from a list
print("Updated list:", list)
# prints updated list

# remove()
# remove is useful when you know exactly what item you want to remove from a list, by name
# but not by index, del is better in that case
# the method returns nothing, it simply removes the item with that name from the list
list.remove("Some String")
# remove Some String from list
print("Updated List:", list)
# prints updated list

# reverse()
# reverse, reverses a list in place, so the order of it is inverted
num_list.reverse() 
print("Inverted List:", num_list)
# prints inverted list


