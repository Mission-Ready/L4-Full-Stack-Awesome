-- Selecting all columns (by using *) from the 'City' table 
-- in the'World'database  
SELECT
    *
FROM
    city;
    
SELECT 
    *
FROM
    world.country   
WHERE
	LifeExpectancy >= 75 AND GovernmentForm = 'Republic' AND Continent != 'Europe';
       
SELECT 
    *
FROM
    world.country   
WHERE
	IndepYear BETWEEN 1990 AND 2018;
    
SELECT 
    *
FROM
    world.country   
WHERE
	(IndepYear BETWEEN 1990 AND 2018) AND (Continent != 'Asia');
    
SELECT 
    *
FROM
    world.country   
WHERE
	Continent IN ('Asia', 'Oceania');
    
SELECT 	Name, Continent, Region, HeadOfState
FROM 	world.country
WHERE 	Continent IN ('Asia' , 'Oceania');

-- % => any no of characters (0 or 1 or multiple) can replace %
SELECT 
    *
FROM
    country
where 
	name like 'Ca%';
    
-- _ => exactly 1 characters can replace the _
SELECT 
    *
FROM
    country
where 
	name like '_anada';   
    
-- All the countries that has a 'd' at the second last position
SELECT 
    *
FROM
    country
where 
	name like '%d_'; 
    
SELECT 
    *
FROM
    country
where 
	name like '%state%'; 
    
-- I want all the countries whose HeadOfState  names start with a 'G' and has an 'a' somewhere in the name
SELECT 
    *
FROM
    country
where 
	HeadOfState like 'G%a%';
-- Name like 'G%a_'; => Eliminates some of the rows retuened - WRONG 
--  	Ga..... 
--      G......a
--      G....a...
    

-- I want the countries whos name starts with an A and has atleast 10 characters in length     
SELECT 
    *
FROM
    country
WHERE
    Name LIKE 'A_________%'; 
    
SELECT DISTINCT
    district
FROM
    city;

SELECT DISTINCT
    continent, HeadOfState
FROM
    country;

