-- Selecting all columns (by using *) from the 'City' table 
-- in the'World'database  

SELECT
    *
FROM
    city;
    

SELECT 
    *
FROM
    country
WHERE
	LifeExpectancy >= 75 AND GovernmentForm = 'Republic'