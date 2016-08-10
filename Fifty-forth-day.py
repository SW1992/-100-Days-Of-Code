# Day Fifty Four
# Python File I/O 
# their are simple examples of I/O in python, with the input & print functions
# more complex file manipulation can be done with the file object
# it can be used to open, close, write to or read from files

# open() 
# before you can do anything to a file, you have to use the python open method to open it
# it requires a file name/location &  file mode (file access permission) as arguments
# by default a file is opened with read permission 
file_object = open("test.txt", "w")
# create file as none exists, open it with write permission


# file object attributes
# once your file is opened or created & opened 
# you then have access to several file object attributes which can inform you with regards to the file
# name gives you the name of the file, mode gives you the file mode it was opened with
# and closed returns a boolean value of True or False depending if the file is closed or not
print("The file name is:", file_object.name)
# test.txt
print("The access permissions are:", file_object.mode)
# w 
print("Is it closed?:", file_object.closed)
# False

# write()
# you can use the write method to write string text to an open file
file_object.write("\nThis is the first line\nThis is the second line\n")
# write text to file

# close()
# when you're done writing to a file it's important to use the close method, to close it
# any written information will then be saved & no more can be written, unless it's opened again 
file_object.close()
# close file
print("Is it closed?", file_object.closed)
# True

# read()
# the read method can be used to read all content of an existing file
# by default the read method will read to the end of the file
file_object = open("test.txt", "r")
# open exsisting file, with read permission
print("The access permissions are now:", file_object.mode)
# r
print("File text:", file_object.read()) 
# This is the first line 
# This is the second line
file_object.close()  
# again, it's important to close the file when you're done with it

   




