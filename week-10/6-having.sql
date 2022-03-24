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

SELECT 
    district,
    MIN(population) 'City with the smallest population'
FROM
    city
GROUP BY district
HAVING AVG(population) < 500000;