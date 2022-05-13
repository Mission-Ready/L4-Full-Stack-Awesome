import { useState } from 'react';

export default function IfStatementExample() {
  const [content, setContent] = useState('Click the button');
  const [showContent, setShowContent] = useState(false);

  const changeContent = () => {
    if (showContent) {
      setContent('Click the button');
      setShowContent(false);
    } else {
      setContent('Congrats you found the hidden content!');
      setShowContent(true);
    }
  };
  
  return (
    <div>
      <button onClick={changeContent}>Click IF Example </button>{' '}
      <div>{content}</div> 
    </div>
  );
}
