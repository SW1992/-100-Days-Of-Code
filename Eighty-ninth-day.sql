/* Day Eighty Nine */
/* Learn SQL: UNIT 1 Manipulation: Part three */  

/* Update Notes:
•	You can use UPDATE clause to change a row in a table
•	Here celebs is the name of table we are updating
•	SET indicates which column to edit, the age column and gives it new value
•	WHERE indicates which row to make the change, the row with the id = 1 */

/* Code: */
ALTER TABLE celebs ADD COLUMN twitter_handle TEXT;

SELECT * FROM celebs;

/* Alter Notes:
•	ALTER TABLE clause can allow you to add columns to a table
•	celebs is the table we are adding to here
•	ADD COLUMN is clause you use to add new colums to the table
•	A twitter_handle column is added which excepts the data type TEXT
•	NULL represents missing or unknown data in SQL */

/* Code: */
UPDATE celebs
SET twitter_handle = "@taylorswift13"
WHERE id = 4;

DELETE FROM celebs
WHERE twitter_handle
IS NULL;

SELECT * FROM celebs;

/* Delete Notes:
•	DELETE FROM clause lets you delete rows from a table
•	celebs is the table to delete from
•	WHERE lets you select which rows to delete
•	IS NULL is a SQL condition that returns true or false dependent if a value is null */

/* Generalizations Notes:
•	SQL allows you to manage and manipulate data stored in relational databases
•	Relational databases arrange information into one or more tables
•	A table is a collection of data, organized into in row & column form
•	A statement is a series of characters the database recognizes as a valid commands */
