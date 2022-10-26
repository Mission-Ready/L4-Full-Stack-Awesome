const express = require('express');
const cors = require('cors');
const mysql = require('mysql2');

const app = express();
app.use(cors()); // THIS NEEDS TO COME BEFORE the json middlware used in the POST method

app.use(express.json()); // Middleware added to process the json body params

/*
CREATE TABLE `missio20_demo`.`tasks` (
  `task_id` INT NOT NULL auto_increment,
  `description` VARCHAR(200) NOT NULL,
  `timestamp` datetime NOT NULL,
  PRIMARY KEY (`task_id`));
*/
const connection = mysql.createConnection({
  host: 'sg1-ts6.a2hosting.com',
  user: 'missio20_demo',
  password: 'k0tCWe-ixDRw',
  database: 'missio20_demo',
});

// 1. Read all the tasks in the list
app.get('/', (req, res) => {
  connection.query('SELECT * FROM tasks', (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

// 2. Add a task to the list of tasks
app.post('/', (req, res) => {
  const { description } = req.body;
  connection.query(`INSERT INTO missio20_demo.tasks (description,timestamp) VALUES ('${description}', NOW());
  `, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

// 3 (a). Delete a task from list of tasks
app.delete('/v2', (req, res) => {
  console.log('delete request recieved');
  const { taskID } = req.body;
  console.log(taskID)
  connection.query(`DELETE FROM missio20_demo.tasks WHERE \`task_id\` = ${taskID};`, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

// 3 (b). Delete a task from list of tasks - based on the string value
app.delete('/', (req, res) => {
  const { description } = req.body;
  console.log(description)
  connection.query(`DELETE FROM missio20_demo.tasks WHERE \`description\` = '${description}';`, (error, result) => {
    if (error) {
      console.log(error);
    } else {
      console.log(result);
      res.json(result);
    }
  });
});

app.listen(4000);
