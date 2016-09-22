/* Day Ninety Seven */ 
/* Learn SQL: UNIT 4 Multiple Tables: Part one */  

/* Multiple Tables Notes: 
•	Often data in a database, is distributed across several tables
•	Data in these tables can be related to one another
•	With SQL we can perform queries that combine data from multiple related tables
•	This is a powerful feature of relational databases */

/* Code: */
CREATE TABLE artists(id INTEGER PRIMARY KEY, name TEXT);

/* Primary Key Notes:
•	A PRIMARY KEY is a unique identifier for each row in a database table
•	PRIMARY KEY columns, must contain unique values, and cannot have NULL values
•	You can only have one PRIMARY KEY in a table */ 

/* Code: */
SELECT * FROM albums;

SELECT * FROM artists;

SELECT * FROM artists WHERE id = 3;

SELECT * FROM albums WHERE artist_id = 3;
