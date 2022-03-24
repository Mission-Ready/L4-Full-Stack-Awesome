SELECT * FROM COUNTRY;

-- Population of each district, found by adding up that of the cities with the same district
SELECT 
    District, SUM(Population) 'Population'
FROM
    world.city
GROUP BY District;

-- Population of each district, found by adding up that of the cities with the same CountryCode
SELECT 
    CountryCode, SUM(Population) 'Population'
FROM
    world.city
GROUP BY CountryCode;

SELECT 
District, MIN(Population) 'Population of the city with the smallest population in each district'
FROM
    world.city
GROUP BY District;

SELECT 
CountryCode, MIN(Population) 'Population of the city with the smallest population in each country'
FROM
    world.city
GROUP BY CountryCode;

-- Average of the city population in each district 
SELECT 
District, AVG(Population) 'Average city population'
FROM
    world.city
GROUP BY District;

SELECT 
    REGION 'Name of the region',
    SUM(POPULATION) 'Regional Population',
    AVG(LifeExpectancy) 'Regional Life Expectancy'
FROM
    country
GROUP BY region;

SELECT 
    Region, SUM(Population) 'Population', AVG(LifeExpectancy)
FROM
    country
GROUP BY Region
ORDER BY SUM(Population) DESC;

-- Using the GROUP BY statement, find the population in each district in the city table.
SELECT 
    District, SUM(population) 'District Population'
FROM
    city
GROUP BY District
ORDER BY district;