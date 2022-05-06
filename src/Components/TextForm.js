import React, { useState } from "react";
import Buttons from "./Buttons";
import "../App.css";

export default function TextForm(props) {
  const handleOnChange = (event) => {
    setText(event.target.value);
  };
  const [text, setText] = useState("Enter Text Here");
  const [outputText, setOutputText] = useState("");

  return (
    <>
      <div className="my-3">
        <div
          className="float-child"
          style={{ width: "30%", border: " 2px solid black" }}
        >
          <Buttons
            text={text}
            setText={setText}
            outputText={outputText}
            setOutputText={setOutputText}
          />
        </div>
        <div
          className="float-child"
          style={{ color: props.textcolor, width: "70%" }}
        >
          <h1>Enter your text</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={text}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>

          <h1>Output</h1>
          <div className="mb-3">
            <textarea
              className="form-control"
              value={outputText}
              onChange={handleOnChange}
              id="myBox"
              rows="8"
            ></textarea>
          </div>
        </div>
      </div>
    </>
  );
}
