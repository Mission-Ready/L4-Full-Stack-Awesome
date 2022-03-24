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
    CITY
ORDER BY NAME
LIMIT 400, 15; -- Skips the first 400 rows. Starts from the 400th to the next 15
