CREATE TABLE IF NOT EXISTS MHQStudentF (
    ID 			INT 			AUTO_INCREMENT PRIMARY KEY,
    LastName 	VARCHAR(10) 	NOT NULL,
    FirstName	VARCHAR(255)
);

INSERT INTO `mhq`.`MHQStudentF`
(`LastName`,
`FirstName`)
VALUES
('Bee', 'Sebin');

SELECT * FROM MHQStudentF;

UPDATE MHQStudentF 
SET 
    `LastName` = 'Benjamin';

-- Update a single column  
UPDATE MHQStudentF 
SET 
    `LastName` = 'Benjamin'
WHERE `ID` = 1;

-- Update multiple column values
UPDATE `mhq`.`MHQStudentF`
SET
`LastName` = 'Doe2',
`FirstName` = 'John2' 
WHERE `ID` = 1;

-- We need to ensure all the column constrains are met, same as when using INSERT
-- Error Code: 1062. Duplicate entry '10' for key 'MHQStudentF.PRIMARY'
UPDATE `mhq`.`MHQStudentF`
SET
`ID` =  3
WHERE `ID` = 10;

-- All rows normally gets updated if the WHERE clause is skipped. **BEWARE**  
-- Error Code: 1175. You are using safe update mode and 
-- you tried to update a table without a WHERE that uses a KEY column.  
-- To disable safe mode, toggle the option in Preferences -> SQL Editor and reconnect.
-- You need to toggle safemode to make it work in MySQL Workbench
UPDATE `mhq`.`MHQStudentF`
SET
`LastName` = 'Benjamin',
`FirstName` = 'Sebin';

-- Turn off Auto-commit transaction to be safer !
-- Update country names for countries with higher life expectancy. 
UPDATE `mhq`.`country` 
SET 
    `Name` = CONCAT(Name, ' Paradise') 
WHERE
    LifeExpectancy >= 80
;

SELECT 
    *
FROM
    COUNTRY;

-- Capitalize the values in the Name field. 
UPDATE `mhq`.`country` 
SET 
    `Name` = UPPER(Name);

