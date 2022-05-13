CREATE TABLE IF NOT EXISTS MHQStudentG (
    ID 			INT 			AUTO_INCREMENT PRIMARY KEY,
    LastName 	VARCHAR(10) 	NOT NULL,
    FirstName	VARCHAR(255)
);

INSERT INTO `mhq`.`MHQStudentG`
(`ID`,
`LastName`,
`FirstName`)
VALUES
(3, 'Benjamin', 'Sebin');

-- Deletes each row in the table.
-- Returns the no of rows deleted
DELETE FROM MHQStudentG;

-- Use WHERE clause to specify the rows which are deleted
SELECT * FROM MHQStudentG;

DELETE FROM MHQStudentG
WHERE 
	ID = 16;
    
DELETE FROM MHQStudentG
WHERE 
	ID <= 20;

SELECT * FROM MHQStudentG;

-- Better performance/faster than a DELETE without WHERE clause
-- Does NOT return the No of rows affected.
TRUNCATE TABLE MHQStudentG;
