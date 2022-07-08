SELECT UUID();
-- 5915bb2f-2f88-11eb-b368-54ee75b03df5
-- 5fd7d004-2f88-11eb-b368-54ee75b03df5
-- 6b3305a3-2f88-11eb-b368-54ee75b03df5

-- UUID based ID, primary key
CREATE TABLE IF NOT EXISTS MHQStudentUUID (
    ID 			BINARY(16) 		PRIMARY KEY,
    LastName 	VARCHAR(10) 	NOT NULL,
    FirstName	VARCHAR(255)
);

-- Inserting UUID as a binary 
INSERT INTO `mhq`.`MHQStudentUUID`
(`ID`,
`LastName`,
`FirstName`
)
VALUES
(UUID_TO_BIN(UUID()),'Doe', 'John');

-- Reading the Binary UUID and converting it into String for display
SELECT 
    BIN_TO_UUID(ID) ID, LastName, FirstName
FROM
    MHQStudentUUID;
    