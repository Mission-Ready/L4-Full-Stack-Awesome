import { useState } from 'react';

import InputComponent from './components/InputComponent';
import ShowList from './components/ShowList';

function App() {
  const [val, setVal] = useState('');
  const [itemList, setItemList] = useState([]);
  const handleChange = (e) => setVal(e.target.value);
  const handleNewListItem = (e) => {
    e.preventDefault();
    const temp = [...itemList];
    temp.push(e.target[0].value);
    setItemList(temp);
  };

  return (
    <div style={{ border: '2px solid green' }}>
      <InputComponent
        val={val}
        handleChange={handleChange}
        handleNewListItem={handleNewListItem}
      ></InputComponent>
      <ShowList itemList={itemList}></ShowList>
    </div>
  );
}

export default App;
