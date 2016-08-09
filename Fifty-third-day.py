# Day Fifty Three
 
# Python Modules Continued
# python has many useful tailor made modules than can be imported into programs
# i will look at some of the most commonly used, datetime, sys and keyword
  
# datetime
# one of the most popular python modules is the datetime module which supplies a datetime object
# which has several different attributes for retrieving the current date & measurements of time 
from datetime import * 
# import everything from the datetime module

# it has a today method that assigns values to it's attributes, returning a tuple consisting of there values when called
# the attributes that are assigned values are year, month, day, hour, minute, second & microsecond
date_today = datetime.today()
# assigns return value of method to variable 
print("Unformatted date:", date_today)
# prints unformatted date  

# you can format these attribute values with directives
# using the strftime method, which converts numeric datetime values to their analogous text strings
day_name = date_today.strftime("%A")
day_num = date_today.strftime("%d")
month_name = date_today.strftime("%B")
year_num = date_today.strftime("%Y")
print("Formatted date:", day_name, day_num, month_name, year_num) 
# prints formatted date 

# sys
# sys is another important module, it has in it an attribute 
# that can tell you what version of python you are running, aswell as other useful attributes
import sys
# import sys module
python_version = sys.version
#  assign version number to variable
print("Python version number:", python_version)
# prints version number of python you're running

# keyword  
# another popular module is the keyword module
# it contains in it a kwlist attribute which holds a list of all python keywords
import keyword
# import keyword module
list_of_keywords = keyword.kwlist
# store list of all python keywords 
print("All native keywords:") 
for keyword in list_of_keywords:  
        print(keyword)
        # prints list of all python keywords



