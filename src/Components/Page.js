import React, { useState, useRef } from "react";
import Tooltip from "./Tooltip";
import "./Page.css";

function Page() {
  const [header, setHeader] = useState("Untitled");
  const [headerclass, setHeaderClass] = useState(["default_header"]);

  const [para, setPara] = useState("Type something...");
  const [paraclass, setParaClass] = useState(["default_para"]);

  const [highlighted, setHighlighted] = useState(false);

  const [position, setPosition] = useState({ x: 0, y: 0 });

  const textAreaRef = useRef(null);

  const headerChange = (value) => {
    setHeader(value);
    setHeaderClass([...headerclass, "header"]);
  };

  const paraChange = (value) => {
    if (para !== value) {
      setParaClass([...paraclass, "para"]);
    }
  };

  const selectedText = (event) => {
    let x = event.clientX;
    let y = event.clientY;
    const selected = window.getSelection().toString();
    if (selected) {
      setPosition({ x, y });
      setHighlighted(true);
    } else {
      setHighlighted(false);
    }
  };

  return (
    <div className="page_container">
      <input
        className={headerclass.join(" ")}
        type="text"
        value={header}
        onClick={() => {
          return header == "Untitled" ? setHeader("") : null;
        }}
        onChange={(e) => {
          headerChange(e.target.value);
        }}
      />

      <div
        contentEditable
        className={paraclass.join(" ")}
        onClick={() => {
          return para == "Type something..." ? setPara("") : para;
        }}
        onInput={(e) => {
          paraChange(e.target.innerText);
        }}
        onMouseUpCapture={(e) => selectedText(e)}
        ref={textAreaRef}
      >
        {para}
      </div>

      {highlighted ? (
        <Tooltip position={position} textAreaRef={textAreaRef} />
      ) : null}
    </div>
  );
}

export default Page;
