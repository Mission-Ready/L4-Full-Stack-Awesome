function ShowList({ itemList }) {
  return (
    <ol style={{border: '2px solid red'}}>
      {itemList.map((item) => (
        <li>{item}</li>
      ))}
    </ol>
  );
}

export default ShowList;
