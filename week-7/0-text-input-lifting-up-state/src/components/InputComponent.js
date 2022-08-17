export default function InputComponent({ val, handleInputChange }) {
  return (
    <div style={{ border: '2px dashed orange' }}>
      This is the <span style={{color: "orange"}}> InputComponent </span> <br></br>
      <input type="text" value={val} onChange={handleInputChange} />
    </div>
  );
}
