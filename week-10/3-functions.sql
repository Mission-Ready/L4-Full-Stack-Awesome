-- Upper and Lower => change casess

SELECT UPPER('Lowercase fun') AS 'In Upper';
SELECT LOWER('SQL Tutorial is FUN!') 'In Lower';
SELECT UPPER('this needs to be capitalized');
SELECT UPPER('this needs to be capitalized') AS 'Ideal Column name';
SELECT UPPER('Lowercase fun') AS 'In Upper', LOWER('SQL Tutorial is FUN!') 'In Lower'; 

-- TRIM removes leading and traliing whitspaces and newline characters

SELECT 
    LOWER(Name)
FROM
    city;
SELECT TRIM('           dsfdf  dffgdfg  dfgdf                ');

SELECT 
    CountryCode,
    TRIM(Language) 'language',
    IsOfficial,
    Percentage
FROM
    countrylanguage;

-- Length Operator returns the length of the string
SELECT 
    Name, LENGTH(Name) 'City Name Length'
FROM
    city;

SELECT 
    *
FROM
    city
WHERE
    LENGTH(District) > 20;

SELECT 
    *, LENGTH(District)
FROM
    city
WHERE
    ID = 2486;
    
-- CONCAT combines two string into one    
SELECT 
    Code,
    Name,
    CONCAT(Continent, Region) 'Location',
    LocalName,
    GovernmentForm
FROM
    country;

-- CONCAT_WS - Concatenate using the seperator specified as the first parameter
SELECT 
    Code,
    Name,
    CONCAT_WS(' ', Continent, Region) 'Location',
    LocalName,
    GovernmentForm
FROM
    country;
    
SELECT 
    Code,
    Name,
    CONCAT_WS(', ', Region, Continent) 'Location',
    LocalName,
    GovernmentForm
FROM
    country;
    
SELECT 
    Code,
    Name,
    CONCAT_WS(' - ', Region, Continent) 'Location',
    LocalName,
    GovernmentForm
FROM
    country;
    
SELECT 
    MAX(LifeExpectancy)
FROM
    country;

SELECT 
    MIN(LifeExpectancy)
FROM
    country;

SELECT 
    COUNT(name)
FROM
    COUNTRY;

SELECT 
    COUNT(DISTINCT District)
FROM
    City;

SELECT 
    COUNT(NAME) 'No of countries with a large population'
FROM
    COUNTRY
WHERE
    Population > 10000000;

SELECT 
    AVG(LifeExpectancy) 'Average World Life expectancy'
FROM
    country;

SELECT 
    AVG(LifeExpectancy) 'Avg Life expectancy in Oceania'
FROM
    country
WHERE
    continent = 'Oceania';

SELECT 
    AVG(LifeExpectancy) 'Avg Life expectancy in NZ'
FROM
    country
WHERE
    name = 'New Zealand';

SELECT 
    SUM(Population)
FROM
    city
WHERE
    CountryCode = 'NZL';

SELECT 
    name, continent, region, ROUND(LifeExpectancy, 0)
FROM
    country;
    
-- Current data and time could be useful for comparision, eg: returnning purchases from last friday to today    
-- https://dev.mysql.com/doc/refman/8.0/en/date-and-time-functions.html
SELECT CURRENT_TIME();-- HH:MI:SS
SELECT CURRENT_DATE();-- YYYY-MM-DD
SELECT CURRENT_TIMESTAMP();-- YYYY-MM-DD HH:MI:SS

SELECT DATE('2022-03-24 14:30:39');-- 2022-03-24
SELECT DAYNAME('2022-03-24 14:30:39');-- Thursday
SELECT DAY('2022-03-24 14:30:39');-- 24
SELECT DAYOFMONTH('2022-03-24 14:30:39');-- 24
SELECT DAYOFWEEK('2022-03-24 14:30:39');-- 5
SELECT DAYOFYEAR('2022-03-24 14:30:39');-- 83rd day of the year
SELECT DATE_FORMAT('2022-03-24 14:30:39', '%W %M %Y');
SELECT DATE_FORMAT('2022-03-24 14:30:39', '%W, %M - %Y') 'Today';

SELECT DATABASE() 'Default Schema';
SELECT USER();
SELECT VERSION();
