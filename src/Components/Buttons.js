import React from "react";

export default function Buttons(props) {
  const handleOnClick = () => {
    props.setOutputText(props.text.toUpperCase());
  };

  const clearAll = () => {
    props.setText("");
  };

  const countWords = () => {
    props.setOutputText(`${props.text.split(" ").length}`);
  };

  const convertLowerCase = () => {
    props.setOutputText(props.text.toLowerCase());
  };

  const countCharacter = () => {
    props.setOutputText(
      `${props.text.length}` - `${props.text.split(" ").length}` + 1
    );
  };

  const countDigits = () => {
    // regular expression to replace all the non-digit characters
    props.setOutputText(props.text.replace(/\D/g, "").length);
  };
  const countSpecialCharacters = () => {
    // regular expression to replace all characters except special characters
    props.setOutputText(props.text.replace(/[A-Z]|[a-z]|[0-9]|\s/g, "").length);
  };
  return (
    <>
      <div className="d-grid gap-2">
        <button
          className="btn btn-primary"
          style={{ position: "relative" }}
          onClick={handleOnClick}
        >
          Convert your text into UpperCase
        </button>
        <button
          className="btn btn-primary"
          style={{ position: "relative" }}
          onClick={convertLowerCase}
        >
          Convert your text into LowerCase
        </button>
        <button
          className="btn btn-primary"
          style={{ position: "relative" }}
          onClick={clearAll}
        >
          Clear Text
        </button>
        <button
          className="btn btn-primary"
          style={{ position: "relative" }}
          onClick={countWords}
        >
          Count Words
        </button>
        <button
          className="btn btn-primary"
          style={{ position: "relative" }}
          onClick={countCharacter}
        >
          Count Characters
        </button>
        <button
          className="btn btn-primary"
          style={{ position: "relative" }}
          onClick={countDigits}
        >
          Count Digits
        </button>
        <button
          className="btn btn-primary"
          style={{ position: "relative" }}
          onClick={countSpecialCharacters}
        >
          Count Special Characters
        </button>
        <button
          className="btn btn-primary"
          style={{ position: "relative" }}
          onClick={countSpecialCharacters}
        >
          Display Special Characters
        </button>
      </div>
    </>
  );
}
