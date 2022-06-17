import { useState } from 'react';
import Counter from './components/Counter';

function App() {
  const [count, setCount] = useState(0);
  const updateCount = () => setCount(count + 1);
  return (
    <>
      <Counter count={count} updateCount={updateCount} color="orange"></Counter>
      <br />
      <Counter count={count} updateCount={updateCount} color="blue"></Counter>
      <br />
      <Counter count={count} updateCount={updateCount} color="green"></Counter>
    </>
  );
}

export default App;
