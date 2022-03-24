-- % is 0 or more characters following. Equivalent to * in Regex
-- _ is exactly 1 chracter. Equivalent to ? in Regex

-- Begins with No
SELECT 
    *
FROM
    mhq.country
WHERE
    Name LIKE 'No%';

-- Begins with N and ends with d
SELECT 
    *
FROM
    mhq.country
WHERE
    Name LIKE 'N%d';

-- Ends with d
SELECT 
    *
FROM
    mhq.country
WHERE
    Name LIKE '%d';
    
-- Contans the string 'island' somewhere
SELECT 
    *
FROM
    mhq.country
WHERE
    Name LIKE '%island%';
    
-- 3 character sting which contains an O in the middle
SELECT 
    *
FROM
    mhq.city
WHERE
    CountryCode LIKE '_O_';
    
-- same as above, but only return unique rows 
SELECT 
	DISTINCT CountryCode
FROM
    mhq.city
WHERE
    CountryCode LIKE '_O_';
    
-- Starts with A, has g as the third letter and may/not have other characters at the end 
SELECT 
	*
FROM
    mhq.country
WHERE
    Name LIKE 'A_g%';

-- Exact match
SELECT 
	*
FROM
    mhq.country
WHERE
    Name LIKE 'Angola';

-- Has 'Africa' somewhere
SELECT 
	*
FROM
    mhq.country
WHERE
    Region like '%Africa%';

-- Has a combination of (a followed by 1 character followed by n) and (the string 'Afrcica' somewhere) 
SELECT 
	*
FROM
    mhq.country
WHERE
    Name LIKE '%a_n%' AND Region LIKE '%Africa%';

-- Does NOT contain 'America' in its name
SELECT 
	*
FROM
    mhq.country
WHERE
    Region NOT LIKE '%America%';
