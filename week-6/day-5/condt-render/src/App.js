import { useState } from 'react';
import IfStatementExample from './IfStatementExample';
import CatDog from './CatDog';
import CatDog2 from './CatDog2';

function App() {
  const [showContent, setShowContent] = useState(false);

  const changeContent = () => setShowContent(!showContent);
  return (
    <>
      <div>
        {/* <button onClick={changeContent}>Click</button> */}
        <div>
          {/*  condition ? statement if true : statement if condition is false */}
          {/* {showContent ? 'Congrats you found the hidden content!' : ''} */}

          {/* {showContent && 'Congrats you found the hidden content!'} */}
        </div>
      </div>
      {/* <IfStatementExample></IfStatementExample> */}
      {/* <CatDog></CatDog> */}
      <CatDog2></CatDog2>
    </>
  );
}

export default App;

//   const [showContent, setShowContent] = useState(false);

//   const changeContent = () => setShowContent(false);
//   return (
//     <div>
//       <button onClick={changeContent}>Click</button>
//       <div>
//         {showContent ? 'Congrats you found the hidden content!' : 'Click the button'}
//       </div>
//     </div>
//   );
// }
// export default function Example1() {
//   const [showContent, setShowContent] = useState(false);
//   const changeContent = () => setShowContent(!showContent);
//   return (
//     <div>
//       <button onClick={changeContent}>Click here</button>
//       <div>{showContent && 'Congrats you found the hidden content!'}</div>
//     </div>
//   );
// }
