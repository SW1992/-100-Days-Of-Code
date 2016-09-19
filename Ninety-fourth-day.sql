/* Day Ninety Four */ 
/* Learn SQL: UNIT 3 Aggregate Functions: Part one */  

/* Aggregate Functions Notes:
•	Aggregate functions can be used, to calculate a result, from given input 
•	It could be used to provide a sum or average of a certain column
•	For this lesson we have given you a table named fake_apps which is made up of data for fake mobile applications */

/* Code: */
SELECT * FROM fake_apps;

SELECT COUNT(*) FROM fake_apps;

/* Count Notes:
•	Quickest way to count number of rows in a table is to use the COUNT() function
•	COUNT() takes a column name as an argument and counts the rows where the column isn’t NULL
•	Here we pass * to count every row */

/* Code: */
SELECT COUNT(*) FROM fake_apps WHERE price = 0;

SELECT price, COUNT(*) FROM fake_apps
GROUP BY price;

/* Group By Notes: 
•	Aggregate functions are particularly useful for sorting data into groups
•	GROUP BY can be used with SELECT to organize identical data into groups
•	Here we will get the total number of apps for each price in the table
•	It’s useful to SELECT the column you pass to GROUP BY, so the data you want to analyse is easier to read */

/* Code: */
SELECT price, COUNT(*) FROM fake_apps
WHERE downloads > 20000 GROUP BY price;

SELECT SUM(downloads) FROM fake_apps;