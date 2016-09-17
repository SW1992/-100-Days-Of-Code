/* Day Ninety Two */
/* Learn SQL: UNIT 2 Queries: Part three */   

/* Between Notes: 
•	BETWEEN operator can filter a result set within a certain range of text, number, or date values */

/* Code: */
SELECT * FROM movies WHERE year BETWEEN 1990 AND 2000 AND genre = 'comedy';

/* And Notes: 
•	AND operator can be used to combine multiple conditions in a WHERE clause
•	You will then be able to return a more specific result set
•	here AND combines two conditions, so the result set will only return rows where both conditions are true */

/* Code: */
SELECT * FROM movies WHERE genre = 'comedy' OR year < 1980;

/* Or Notes:
•	OR operator can also be used to combine multiple conditions in a WHERE clause
•	with OR both conditions are evaluated separately, if either are true, that row will be present in the result set */

/* Code: */
SELECT * FROM movies ORDER BY imdb_rating DESC;
