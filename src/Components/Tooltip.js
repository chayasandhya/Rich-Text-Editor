import React, { useRef, useState } from "react";
import "./Tooltip.css";

function Tooltip({ position, textAreaRef }) {
  const [fontSize, setFontSize] = useState(4);

  const makeBold = (evt) => {
    document.execCommand("bold");
  };

  const makeItalic = (evt) => {
    document.execCommand("italic");
  };

  const makeUnderLine = (evt) => {
    document.execCommand("underline");
  };

  const increaseFontSize = (size) => {
    if (size < 8) setFontSize(fontSize + 1);
    document.execCommand("fontSize", false, size);
  };

  const decreaseFontSize = (size) => {
    if (size > 0) setFontSize(fontSize - 1);
    document.execCommand("fontSize", false, size);
  };

  return (
    <span
      style={{ left: position.x - 120 + "px", top: position.y - 160 + "px" }}
      className="tooltip_container"
    >
      <div style={{ fontWeight: "bold" }} onMouseDown={(evt) => makeBold(evt)}>
        B
      </div>
      <div
        style={{ fontStyle: "italic" }}
        onMouseDown={(evt) => makeItalic(evt)}
      >
        i
      </div>
      <div
        style={{ textDecoration: "underline" }}
        onMouseDown={(evt) => makeUnderLine(evt)}
      >
        U
      </div>
      <div onMouseDown={(evt) => increaseFontSize(fontSize + 1)}>A</div>
      <div
        style={{ fontSize: "10px" }}
        onMouseDown={(evt) => decreaseFontSize(fontSize - 1)}
      >
        A
      </div>
    </span>
  );
}

export default Tooltip;
