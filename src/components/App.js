import React, { Component, useState } from "react";
import "../styles/App.css";

function App() {
  const [name1, setName1] = useState("");
  const [name2, setName2] = useState("");
  const [result, setResult] = useState("");

  const calculateRelationship = () => {
    if (!name1 || !name2) {
      setResult("Please Enter valid input");
      return;
    }

    let name1Arr = name1.split("");
    let name2Arr = name2.split("");

    // Remove common letters
    name1Arr.forEach((char) => {
      const indexInName2 = name2Arr.indexOf(char);
      if (indexInName2 !== -1) {
        name2Arr.splice(indexInName2, 1);
        name1Arr = name1Arr.filter((c) => c !== char);
      }
    });

    const remainingLength = name1Arr.length + name2Arr.length;
    const flamesResult = remainingLength % 6;

    let relationship;
    switch (flamesResult) {
      case 1:
        relationship = "Friends";
        break;
      case 2:
        relationship = "Love";
        break;
      case 3:
        relationship = "Affection";
        break;
      case 4:
        relationship = "Marriage";
        break;
      case 5:
        relationship = "Enemy";
        break;
      case 0:
        relationship = "Siblings";
        break;
      default:
        relationship = "Please Enter valid input";
    }

    setResult(relationship);
  };

  const clearFields = () => {
    document.getElementById("input1").value = "";
    document.getElementById("input2").value = "";
    setName1("");
    setName2("");
    setResult("");
  };

  return (
    <div id="main">
      {/* Do not remove the main div */}
      <input
        type="text"
        placeholder="Enter First Name"
        data-testid="input1"
        onChange={(e) => setName1(e.target.value)}
        id="input1"
      />
      <input
        type="text"
        placeholder="Enter Second Name"
        data-testid="input2"
        id="input2"
        onChange={(e) => setName2(e.target.value)}
      />
      <button
        onClick={calculateRelationship}
        data-testid="calculate_relationship"
      >
        Calculate Relationship Future
      </button>
      <button data-testid="clear" onClick={clearFields}>
        Clear
      </button>
      <h3 data-testid="answer">{result}</h3>
    </div>
  );
}

export default App;
