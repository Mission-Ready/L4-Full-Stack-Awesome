export default function Counter({ count, updateCount, color }) {
  return (
    <div style={{ border: `2px dashed ${color}` }}>
      <div>Count: {count}</div>
      <button onClick={updateCount}>Add count</button>
    </div>
  );
}
