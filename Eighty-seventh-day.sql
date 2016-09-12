/* Day Eighty Seven */
/* Learn SQL: UNIT 1 Manipulation: Part one */ 

/* Introduction Notes:
•	SQL stands for “Structured Query language” 
•	It’s a language designed for data management and interaction with relational databases
•	It’s works through uncomplex, declarative statements, this helps keep data secure and accurate, even in large scale databases */

/* Code: */
SELECT * FROM celebs; 

/* Relational databases Notes:
•	A relational database, is a database that organizes information into one or more tables
•	Tables consist of rows and columns
•	Colum’s correspond to the data value categories in the table i.e. “name”
•	Rows are data value entries in the table 
•	There’s several common data types stored in relational databases, such as integer, text, date and real (decimals) */

/* Code: */
SELECT * FROM celebs;

/* Statements Notes:
•	SQL statements are text that the database identifies as commands
•	SQL statements always end with a semi-colon
•	CREATE TABLE is a SQL clause, clauses are written in captials
•	table-name, is the name of the table the command works on
•	(column_1 data_type,…) are parameters, parameters are arguments passed to the clause */

/* Code: */
CREATE TABLE table_name (
    column_1 data_type,  
    column_2 data_type, 
    column_3 data_type
  );
  
CREATE TABLE celebs (
    id INTEGER,
    name TEXT,
    age INTEGER
);






