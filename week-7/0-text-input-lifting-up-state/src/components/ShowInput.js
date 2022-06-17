export default function ShowInput({ val }) {
  return (
    <div style={{ border: '2px dashed green' }}>
      This the <span style={{ color: 'green' }}>ShowInput </span> component
      <br />
      Shared state Val is <h1> {val}</h1>
    </div>
  );
}
