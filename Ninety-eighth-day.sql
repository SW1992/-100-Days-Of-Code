/* Day Ninety Eight */ 
/* Learn SQL: UNIT 4 Multiple Tables: Part two */   

/* Foreign Key Notes:    
•	foreign keys hold the primary key value of another table in a database
•	useful for connecting two related rows in different tables
•	foreign key values can be NULL and don’t need to be unique, unlike primary keys
•	because the artists and albums table have the same id value, they’re relatable */

/* Code: */  
SELECT albums.name, albums.year, artists.name FROM albums, artists;

/* Cross Join Notes:
•	query multiple tables with SELECT by including them as a comma separated list
•	this is also referred to as cross join
•	when querying multiple tables columns are referred to with the syntax table_name.column_name
•	the result of the last cross join is messy; a more useful one can be written */

/* Code: */
SELECT * FROM albums JOIN artists ON albums.artist_id = artists.id;
