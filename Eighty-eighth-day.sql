/* Day Eighty Eight */
/* Learn SQL: UNIT 1 Manipulation: Part two */ 

/* Create Notes: 
•	The CREATE statement can be used to create new tables, in SQL databases
•	CREATE TABLE will create a new table in the database celebs
•	celebs is the table_name 
•	the list of parameters we pass to the clause determine the column names, and the data-type they except as entries in a row. */

/* Code: */
Insert INTO celebs (id, name, age) VALUES (1,"Justin Bieber",21);

SELECT * FROM celebs;

/* Insert Notes:
•	You can use the INSERT statement to add rows to a table
•	The INSERT INTO clause Specifies row or rows to insert 
•	(id, name, age) are columns the data will be inserted into
•	The VALUE clause indicates data to be inserted (1, 'Justin Bieber', 21) */

/* Code: */
INSERT INTO celebs (id,name,age) VALUES
(2, "Beyonce Knowles",33);
INSERT INTO celebs (id,name,age) VALUES
(3, "Jeremy Lin",26); 
INSERT INTO celebs (id,name,age) VALUES
(4,"Taylor Swift",26);
SELECT name FROM celebs; 

/* Select Notes:
•	You can use the SELECT statement to get data from a database
•	SELECT name FROM celebs, fetches all data from the name column of the celebs table
•	SELECT will be used whenever you want to query data from a database
•	SELECT * could be used to get all data from the table
•	SELECT statements always return a result set. */

/* Code: */
UPDATE celebs
SET age = 22
WHERE id = 1;

SELECT * FROM celebs;
