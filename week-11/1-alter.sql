CREATE TABLE `mhqstudentc` (
  `ID`        int           PRIMARY KEY NOT NULL AUTO_INCREMENT,
  `LastName`  varchar(10)   NOT NULL,
  `FirstName` varchar(255)  DEFAULT NULL,
  `Age`       int DEFAULT   NULL CHECK (`Age` >= 18),
  `Course`    varchar(255)  DEFAULT 'Full Stack Development',
  `Created_at` timestamp    NULL DEFAULT CURRENT_TIMESTAMP,
)

ALTER TABLE `learning_sql`.`mhqstudentc` 
  ADD COLUMN `color`  VARCHAR(45) NULL  AFTER `Created_at`;

DROP TABLE mhqstudentc;