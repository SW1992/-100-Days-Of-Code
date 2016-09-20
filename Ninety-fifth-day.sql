/* Day Ninety Five */ 
/* Learn SQL: UNIT 3 Aggregate Functions: Part two */ 

/* Sum Notes:
•	Use SUM() to easily add all values in a particular column together
•	SUM() takes the name of a column as an argument
•	It returns the sum of all that columns values */ 

/* Code: */
SELECT category, SUM(downloads) FROM fake_apps GROUP BY category;

SELECT MAX(downloads) FROM fake_apps; 

/* Max Notes:
•	MAX() returns the largest value in a column
•	It takes the name of the column as an argument
•	here downloads is the argument, so it returns the largest value of that column */

/* Code: */
SELECT name, category, MAX(downloads) FROM fake_apps GROUP BY category;

SELECT MIN(downloads) FROM fake_apps;

/* Min Notes:
•	MIN() returns the smallest value in a column
•	It also takes the name of the column as an argument
•	Here, it’s returning the smallest value in the download column */

/* Code: */
SELECT name, category, MIN(downloads) FROM fake_apps GROUP BY category;

SELECT AVG(downloads) FROM fake_apps;
