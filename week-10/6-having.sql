SELECT 
    District, SUM(population) 'District Population'
FROM
    city
GROUP BY District
HAVING SUM(population) <2000;

SELECT 
    district,
    MIN(population) 'City with the smallest population'
FROM
    city
GROUP BY district;

-- Population of the city with the smallest population in each district
-- having a an average population greater than 90000
SELECT 
District, MIN(Population) 'Population of the city'
FROM
    world.city
GROUP BY District
HAVING AVG(Population) > 90000;
