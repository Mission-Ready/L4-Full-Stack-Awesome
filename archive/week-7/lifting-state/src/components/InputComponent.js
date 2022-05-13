export default function InputComponent({ val, handleChange }) {
  return (
    <div style={{ border: '2px dashed orange' }}>
      <input value={val} type="text" onChange={handleChange} />
      <button type="submit">Submit</button>
    </div>
  );
}
