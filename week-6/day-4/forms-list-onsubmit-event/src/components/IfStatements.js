import { useState } from 'react';
export default function IfStatements() {
  const [content, setContent] = useState('Click the button');
  
  // To remember if the content is being shown now. 
    // false => content is hidden.  
    // true => content is being shown currently.
  const [showContent, setShowContent] = useState(false); 

  function changeContent() {
    if (showContent) {
      // If content is already being show, then hide it
      setContent('Click the button');
      setShowContent(false);
    } else {
      // If content is already hidden, then show it
      setContent("Congrats you've found the hidden content !");
      setShowContent(true);
    }
  }

  return (
    <>
      <div>
        <div>{content}</div>
        <button onClick={changeContent}>Change Content</button>
      </div>
    </>
  );
}
