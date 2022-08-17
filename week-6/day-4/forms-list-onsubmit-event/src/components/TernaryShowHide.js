import { useState } from 'react';

export default function TernaryShowHide() {
  const [showContent, setShowContent] = useState(false);
  
  function changeContent() {
    setShowContent(!showContent);
  }
  
  return (
    <>
      <div>
        {showContent
          ? "Congrats you've found the hidden content !"
          : 'Click the button'}
      </div>
      <button onClick={changeContent}>Show the hidden stuff</button>
    </>
  );
}
