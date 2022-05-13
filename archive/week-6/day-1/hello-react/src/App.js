// import Footer from './Footer';
// import Car from './Car';

function App() {
  const users = [
    { id: 1, name: 'Sebin Benjamin' },
    { id: 2, name: 'John Doe' },
    { id: 3, name: 'Jane Doe' },
  ];
  return (
    <div>
      {users.map((user) => (
        <div> {user.name} </div>
      ))}
    </div>
  );
}

export default App;

/**
 * 
 * const fruits = [
    {
      name: 'Apple',
      units: 3,
      price: 0.25,
    },
    {
      name: 'Mango',
      units: 6,
      price: 0.35,
    },
    {
      name: 'Banana',
      units: 4,
      price: 0.15,
    },
  ];

  const newArrayFromFruits = fruits.map((fruit, index) => {
    return `${index + 1}. ${fruit.units} units of ${fruit.name} costs $${fruit.units * fruit.price}`;
  });

  console.log(newArrayFromFruits);
 * 
 * 
 */
