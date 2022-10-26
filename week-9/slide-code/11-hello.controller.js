const routeHandler = (req, res) => {
  // Run the SQL query, when you get a request to /
  connection.query(`SELECT * FROM WORLD.CITY LIMIT 2;`, (error, result) => {
    if (error) {
      console.log('Error', error);
      res.send("You' got an error ! " + error.code);
    } else {
      console.log(result, new Date().toISOString());
      res.send(result);
    }
  });
  res.send('Hello World from a controller');
};

module.exports = {
  routeHandler,
};
