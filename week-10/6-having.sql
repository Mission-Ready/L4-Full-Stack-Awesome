SELECT 
    District, SUM(population) 'District Population'
FROM
    city
GROUP BY District
HAVING SUM(population) <2000;