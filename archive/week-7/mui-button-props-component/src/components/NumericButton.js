import './NumericButton.css';

// child component of the App component
function NumericButton({ num, isSpecial }) {
  return (
    <>
      {
        isSpecial ? (
          <div className="numButton numButtonGreen"> {num} </div>
        ) : (
          <div className="numButton"> {num} </div>
        )
      }
    </>
  );
}

// function NumericButton({ num }) {
//   let displayElement = '';
//   if (num % 2 === 0) {
//     //if num is even
//     displayElement = <div className="numButton"> {num} </div>;
//   } else {
//     displayElement = <div className="numButton numButtonGreen"> {num} </div>;
//   }
//   return displayElement;
// }

export default NumericButton;
