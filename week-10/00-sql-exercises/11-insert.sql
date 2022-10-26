CREATE TABLE IF NOT EXISTS MHQStudentE (
    ID 			INT 			AUTO_INCREMENT KEY,
    LastName 	VARCHAR(10) 	NOT NULL,
    FirstName	VARCHAR(255)
);

-- Single row insertion 
INSERT INTO `mhq`.`MHQStudentE`
(`FirstName`,
`LastName`
)
VALUES
('Sebin', 'Benjamin');

SELECT * FROM MHQStudentE;

-- Inserting multiple rows
INSERT INTO `mhq`.`MHQStudentE`
(`LastName`,
`FirstName`
)
VALUES
('John', 'Cicla'),
('Doe', 'John'),
('Doe', 'Jane'),
('Kom', 'Mary')
;

SELECT * FROM MHQStudentE;
