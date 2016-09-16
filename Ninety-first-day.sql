/* Day Ninety One */
/* Learn SQL: UNIT 2 Queries: Part two */   

/* Where Notes: 
•	WHERE clause allows you to filter a result set, to only include rows where the given condition is true
•	imdb_rating > 8 is the condition it’s using to filter the result set, only rows where this condition is true will be returned */

/* Code: */
SELECT * FROM movies WHERE name LIKE 'Se_en';

/* Like-I Notes:
•	LIKE is a special operator, that can be used with WHERE to look for column values similar to a sequence
•	Se_en represents a pattern with a wildcard character, any character can be substituted in the place of _ without breaking the pattern 
•	So Se7en and Seven match the given pattern */

/* Code: */
SELECT * FROM movies WHERE name LIKE "a%";

/* Like-II notes:
•	The % wildcard character matches zero or more missing letters in the pattern
•	Use it before & after a pattern to filter instances where a set of characters is preceeded or followed by any other characters
•	LIKE is not case sensitive */

/* Code: */
SELECT * FROM movies WHERE name BETWEEN 'A' AND 'J';
SELECT * FROM movies WHERE year BETWEEN 1990 AND 2000;
