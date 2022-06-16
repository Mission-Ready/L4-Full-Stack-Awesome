import { useState } from 'react';

export default function Counter() {
  const [count, setCount] = useState(0);
  const updateCount = () => setCount(count + 1);

  return (
    <div style={{ border: '2px dashed orange' }}>
      <div>Count: {count}</div>
      <button onClick={updateCount}>Add count</button>
    </div>
  );
}
