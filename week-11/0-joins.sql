SELECT 
    city.Name 'City Name',
    city.District,
    country.name 'Country',
    country.Continent
FROM
    world.city
JOIN
    country ON city.CountryCode = country.Code
;

-- You can always have the where to specify a specific city
SELECT 
    city.Name 'City Name',
    city.District,
    country.name 'Country',
    country.Continent
FROM
    world.city
JOIN
    country ON city.CountryCode = country.Code
WHERE 
    city.Name = 'Auckland'
;

-- Find the Name of the city, the district name and the language spoken in the country where the city is in

SELECT 
    city.Name 'City Name',
    city.District,
    countryLanguage.Language
FROM
    world.city
JOIN
    countryLanguage ON city.CountryCode = countrylanguage.CountryCode
WHERE
    `IsOfficial` = 'T';


-- List of Counties (in DESC order of life expectancy) which has 
-- English as their official language and has life expectancy 
-- above 70 years

SELECT Country.Name, country.LifeExpectancy
FROM countrylanguage
JOIN country ON country.Code = countrylanguage.CountryCode
WHERE 
	countrylanguage.Language = 'English' AND IsOfficial = 'T' 
    AND country.LifeExpectancy > 70
Order by country.LifeExpectancy DESC;

-- What are the tables that are involved or needs to be joined?
-- What is the common *column* in those table that I can JOIN ON
-- What *columns* from each table should be shown (SELECTed) in the final result?
-- Are there any conditions (WHERE) to filter the result on?
