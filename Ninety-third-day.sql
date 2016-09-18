/* Day Ninety Two */
/* Learn SQL: UNIT 2 Queries: Part four */  

/* Order By Notes: 
•	ORDER BY can be used to sort the result of a query
•	It can make data easier to evaluate
•	ORDER BY indicates you want to sort, by column, alphabetically or numerically.
•	ASC or DESC can be used to sort in acceding or descending order */

/* Code: */
SELECT * FROM movies ORDER BY imdb_rating ASC LIMIT 3;

/* Limit Notes: 
•	Even filtered results could return thousands of results in large databases
•	LIMIT allows you to cap the maximum amount of rows a result set can have */

/* Generalizations Notes: 
•	Use SELECT clause every time you want to query a database
•	WHERE command lets you filter results of a query, based on set conditions
•	LIKE and BETWEEN are operators that can be used for filtering along with WHERE
•	AND and OR allow you to specify more than one condition to check, when filtering
•	ORDER BY allows sorting of a query in ascending or descending order 
•	LIMIT lets you cap the amount of rows a query will return, useful in large databases */
