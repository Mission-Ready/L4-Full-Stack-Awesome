SELECT 
    *
FROM
    CITY
LIMIT 100;

SELECT 
    *
FROM
    CITY
ORDER BY NAME
LIMIT 15;

SELECT 
    *
FROM
    world.city;

-- Show the first 7 results. Unpredictable results as no ORDER BY clause is used
SELECT 
    *
FROM
    world.city
LIMIT 7;

-- Show the first 7 results. Unpredictable results as no ORDER BY clause is used
SELECT 
    *
FROM
    world.city
WHERE Name LIKE 'Kab%'
LIMIT 7;

-- Show the first 5 results. Predictable results as we ORDER BY the Name
SELECT 
    *
FROM
    world.country
WHERE Region LIKE 'A%'
ORDER BY Name
LIMIT 5;

-- Show the first 3 results
SELECT 
    *
FROM
    world.country
WHERE Region LIKE 'A%'
ORDER BY Name
LIMIT 3;

SELECT 
    *
FROM
    world.country
ORDER BY Name
LIMIT 5 OFFSET 1;

SELECT 
    *
FROM
    world.country
ORDER BY Name
LIMIT 1 , 5;

-- Show the first 3 results
SELECT 
    *
FROM
    world.country
WHERE
    Region LIKE 'A%'
ORDER BY Name
LIMIT 0 , 3;

-- Show the NEXT 3 results
-- Offset => Page no X the no of results in a pages 
SELECT 
    *
FROM
    world.country
WHERE
    Region LIKE 'A%'
ORDER BY Name
LIMIT 3 , 3;

-- Show the NEXT 3 results
SELECT 
    *
FROM
    world.country
WHERE
    Region LIKE 'A%'
ORDER BY Name
LIMIT 6 , 3;

-- Skips the first 400 rows. Starts from the 400th to the next 15
SELECT 
    *
FROM
    CITY
ORDER BY NAME
LIMIT 400, 15; 
