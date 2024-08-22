import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [relationship, setRelationship] = useState("");

  function calculateRelationship() {
    // convert the names to arrays
    let arr1 = input1.split("");
    let arr2 = input2.split("");

    // remove common characters
    for (let i = 0; i < arr1.length; i++) {
      for (let j = 0; j < arr2.length; j++) {
        if (arr1[i] === arr2[j]) {
          arr1.splice(i, 1);
          arr2.splice(j, 1);
          i--;
          break;
        }
      }
    }

    // calculate the sum and take modulus by 6
    const sum = (arr1.length + arr2.length) % 6;

    // determine the relationship status
    let status;
    switch (sum) {
      case 1:
        status = "Friends";
        break;
      case 2:
        status = "Love";
        break;
      case 3:
        status = "Affection";
        break;
      case 4:
        status = "Marriage";
        break;
      case 5:
        status = "Enemy";
        break;
      case 0:
        status = "Siblings";
        break;
      default:
        status = "Please Enter valid input";
    }
    setRelationship(status);
  }

  const clearInputs = () => {
    setInput1("");
    setInput2("");
    setRelationship("");
  };

  return (
    <div id="main">
      <input
        type="text"
        data-testid="input1"
        name="name1"
        value={input1}
        onChange={(e) => setInput1(e.target.value)}
      />
      <input
        type="text"
        data-testid="input2"
        name="name2"
        value={input2}
        onChange={(e) => setInput2(e.target.value)}
      />
      <button
        data-testid="calculate_relationship"
        onClick={calculateRelationship}
      >
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={clearInputs}>
        Clear
      </button>
      <h3 data-testid="answer"> {relationship}</h3>
    </div>
  );
};

export default App;
