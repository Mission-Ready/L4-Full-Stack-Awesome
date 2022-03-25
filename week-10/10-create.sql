USE mhq;
-- A PRIMARY KEY constraint automatically has UNIQUE & NOT NULL applied. 

-- Error Code: 1050. Table 'mhqstudent' already exists
-- Use IF NOT EXISTS to catch the error and continue the script 
CREATE TABLE MHQStudent (
    ID 			INT 			PRIMARY KEY,
    LastName 	VARCHAR(255)	NOT NULL,
    FirstName 	VARCHAR(255),
    Age 		INT
) ENGINE=INNODB;

--  IF NOT EXISTS -> used to skips table creation if the table already exists
CREATE TABLE IF NOT EXISTS MHQStudent (
    ID 			INT 			NOT NULL PRIMARY KEY,
    LastName 	VARCHAR(255) 	NOT  NULL,
    FirstName 	VARCHAR(255),
    Age 		INT
);

-- UNIQUE constraint ensures that all values in the column are different
CREATE TABLE IF NOT EXISTS MHQStudentA (
    ID 			INT 			NOT NULL PRIMARY KEY,
    LastName 	VARCHAR(255) 	NOT NULL,
    FirstName 	VARCHAR(255),
    Age			INT 			,
    Email 		VARCHAR(255)	UNIQUE
);

-- Error Code: 1062. Duplicate entry '26' for key 'persons.Age'
INSERT INTO `mhq`.`MHQStudentA`
(`ID`,
`FirstName`,
`LastName`,
`Age`)
VALUES
(11, 'Sebin','Benjamin', 27);

-- CHECK constraint is used to limit the value range that can be placed in a column
CREATE TABLE IF NOT EXISTS MHQStudentB (
    ID 			INT NOT NULL PRIMARY KEY,
    LastName 	VARCHAR(255) NOT NULL,
    FirstName 	VARCHAR(255),
    Age			INT CHECK (Age >= 18)
);

-- Error Code: 3819. Check constraint 'persons_chk_1' is violated.
INSERT INTO `mhq`.`MHQStudentB`
(`ID`,
`FirstName`,
`LastName`,
`Age`)
VALUES
(10, 'John','Doe', 17);

-- DEFAULT constraint is used to provide a default value for a column. 
CREATE TABLE IF NOT EXISTS MHQStudentC (
    ID 			INT 			PRIMARY KEY,
    LastName 	VARCHAR(10) 	NOT NULL,
    FirstName	VARCHAR(255),
    Age 		INT				UNIQUE CHECK (Age >= 18),
    Course 		VARCHAR(255) 	DEFAULT 'Full Stack Development',
    Created_at 	TIMESTAMP 		DEFAULT CURRENT_TIMESTAMP()
);

-- Default value of 'Full Stack Development' inserted for the column course 
-- And CURRENT_TIMESTAMP inserted for Created_at column
INSERT INTO `mhq`.`MHQStudentC`
(`ID`,
`LastName`,
`Age`
)
VALUES
(17,'Doe3e', 20);

-- Auto-increment generats unique number automatically for the column on insertion.
CREATE TABLE IF NOT EXISTS MHQStudentD (
    ID 			INT 			AUTO_INCREMENT PRIMARY KEY,
    LastName 	VARCHAR(10) 	NOT NULL,
    FirstName	VARCHAR(255)
);
 
INSERT INTO `mhq`.`MHQStudentD`
(`LastName`,
`FirstName`
)
VALUES
('Benjamin', 'Sebin');

--  You could still give your own. It jumps over to the next highest number on next insertion.
INSERT INTO `mhq`.`MHQStudentD`
(`ID`,
`LastName`,
`FirstName`
)
VALUES
(50,'Benjamin', 'Sebin');
