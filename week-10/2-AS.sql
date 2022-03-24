SELECT Name, District, Population AS 'No of People' FROM city;
SELECT Name, Continent, Region, IndepYear AS 'Year of Independence' FROM country;

SELECT Name, District, Population 'No of People' FROM city;
SELECT Name, Continent, Region, IndepYear 'Year of Independence' FROM country;

-- The single guotes could be omitted if the provided string is valid without any spaces/forbidden characters
SELECT 
    IndepYear 'Year_of_Indepndence', SurfaceArea 'Area'
FROM
    country;
    
SELECT 
    IndepYear Year_of_Indepndence, SurfaceArea Area
FROM
    country;
    
