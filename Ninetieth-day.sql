/* Day Ninety */
/* Learn SQL: UNIT 2 Queries: Part one */  

/* Queries Notes:
•	One of SQL’s purposes is to get information from a database
•	This is called querying
•	It allows us to talk to a database, and have data returned that’s relative to the question */

/* Code: */
SELECT name, imdb_rating FROM movies; 

/* Select-II Notes:
•	You can query multiple columns with SELECT by comma separating them */

/* Code: */
SELECT DISTINCT genre FROM movies;

/* Select Distinct Notes:
•	SELECT DISTINCT can be used to return the unique values from a result set
•	Filtering is important in SQL and can make result sets easier to read
•	The WHERE clause can also be used for filtering */

/* Code: */
SELECT * FROM movies WHERE imdb_rating > 8;
