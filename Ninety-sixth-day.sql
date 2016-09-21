/* Day Ninety Six */ 
/* Learn SQL: UNIT 3 Aggregate Functions: Part three */ 

/* Average Notes:
•	AVG() calculates and returns the average value for a specific column
•	It takes a column name as an argument */ 

/* Code: */
SELECT price, AVG(downloads) FROM fake_apps GROUP BY price;

SELECT price, ROUND(AVG(downloads), 2) FROM fake_apps GROUP BY price;

/* Round Notes:  
•	ROUND() can make result sets easier to read, by the rounding of results
•	It takes a column and integer as input
•	It’ll round values in the specified column to integer number of decimal places
•	Here, SQL first gets the AVG downloads for each price
•	Then it’s rounded to two decimal places */

/* Code: */
SELECT price, ROUND(AVG(downloads)) FROM fake_apps GROUP BY price;

/* Generalizations Notes:
•	Aggregate functions can be used perform calculations on multiple rows
•	GROUP BY can be used to combine data from a particular column or columns
•	COUNT(), SUM(), MAX(), MIN(), AVG(), ROUND() all take column names as arguments
•	COUNT() returns number of rows whose value isn’t NULL
•	SUM() returns sum of all values in a column
•	MAX() returns largest value in a column
•	MIN() returns smallest value in a column
•	AVG() returns average value for a column
•	ROUND() rounds values in a column to integer number of decimal places */
