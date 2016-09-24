/* Day Ninety Nine */ 
/* Learn SQL: UNIT 4 Multiple Tables: Part three */ 

/* Inner Join: 
•	SQL joins combine rows from more than one table
•	Inner joins combine rows if a condition is true
•	SELECT * selects all columns
•	FROM albums, queries first table 
•	JOIN artists ON declares type of join we are doing, and second table to query
•	albums.artist_id = artists.id is the join condition
•	it matches rows where the foreign key value, matches the PRIMARY KEY value
•	so only one row will be returned for each match */

/* Code: */
SELECT * FROM albums LEFT JOIN artists ON albums.artist_id = artists.id;

/* Left Outer Join: 
•	Outer joins combine rows from more than one table
•	Unlike inner joins they don’t require a join condition to be met
•	Every row from the left table, albums, is returned in the results
•	Rows from the right table, artists, are set too NULL if the condition isn’t met */

/* Code: */ 
SELECT albums.name AS 'Album', albums.year, artists.name AS 'Artist' 
FROM albums JOIN artists ON albums.artist_id = artists.id WHERE albums.year > 1980;
  