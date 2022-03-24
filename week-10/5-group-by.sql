SELECT * FROM COUNTRY;

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