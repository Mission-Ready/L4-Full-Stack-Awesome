SELECT 
    *
FROM
    countryLanguage
ORDER BY Language;

SELECT 
    *
FROM
    countryLanguage
ORDER BY Countrycode;

SELECT 
    *
FROM
    countryLanguage
ORDER BY Language DESC;

SELECT 
    *
FROM
    countryLanguage
ORDER BY Language ASC; -- Redundant as the default order is ascending.

-- To order within CountryCodes having the same Language 
SELECT 
    *
FROM
    countryLanguage
ORDER BY Language ASC, CountryCode;

SELECT 
    *
FROM
    countryLanguage
ORDER BY Language ASC, CountryCode DESC;
