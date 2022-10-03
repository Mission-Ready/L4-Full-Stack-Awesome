function InputComponent({ val, handleChange, handleNewListItem }) {
  return (
    <form onSubmit={handleNewListItem}>
      <label>
        <input type="text" value={val} onChange={handleChange} />
        <input type="submit" value="Submit"></input>
      </label>
    </form>
  );
}

export default InputComponent;
