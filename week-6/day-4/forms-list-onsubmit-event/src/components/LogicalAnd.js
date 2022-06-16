import { useState } from 'react';

export default function LogicalAnd() {
  const [showContent, setShowContent] = useState(false);

  function updateContent() {
    setShowContent(!showContent);
  }

  return (
    <>
      <div>
         {/* Logical AND operator  */}
        <div>{showContent && "Congrats you've found the hidden content"}</div>
        <button onClick={updateContent}>Update Content</button>
      </div>
    </>
  );
}
