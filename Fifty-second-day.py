# Day Fifty Two

# Python Modules
# Modules are collections of python code that are stored in an external file
# the module can contain function definitions, variables etc 
# they allow you flexibility to share functionality between different programs
# without having to copy the same code into each one

# import
# for module code to be available for use in another program you need to use the import statement
# importing of modules is usually done at the beginning of a program
import module
# import our module 
 
# our function definitions can then be called with the syntax module_name.function_name
module.greeting("Matt")
# Welcome Matt
module.age(28) 
# 28 huh? you're all grown up!
module.profession("Doctor")
# And a you're a Doctor  

# from import
# from import can be used to import individual names from a module, or all names using "*"
# functions imported like this can be called without using the module name prefix
from module_two import *
# import everything
years_salary("£28,000")
# Who makes £28,000 a year, Impressive!

# when importing a module the interpreter will search for it in a certain order
# in both of these cases it'll find it in the first place it searches, the current directory
# if it doesn't find it there it will next look though each directory in the list contained in the PYTHONPATH Variable
# if both of these fail it will finally search for it in the default path  







