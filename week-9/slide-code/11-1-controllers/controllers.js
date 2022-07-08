const handleCars = (req, res) => {
  console.log('Route handler for /car');
  res.send('The car is black');
};

const handleColor = (req, res) => {
  console.log('Route handler for /car/color');
  res.send('The car is blue');
};

module.exports = {
  handleCars,
  handleColor,
};
