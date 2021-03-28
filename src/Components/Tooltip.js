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

  const fontColor = (color) => {
    document.execCommand("foreColor", false, color);
  };

  return (
    <span
      style={{ left: position.x - 120 + "px", top: position.y - 180 + "px" }}
      className="tooltip_container"
    >
      <div
        className="tooltip_btn"
        style={{ fontWeight: "bold" }}
        onMouseDown={(evt) => makeBold(evt)}
      >
        B<span className="short_cut_key">Ctrl+B</span>
      </div>
      <div
        className="tooltip_btn"
        style={{ fontStyle: "italic" }}
        onMouseDown={(evt) => makeItalic(evt)}
      >
        i<span className="short_cut_key">Ctrl+I</span>
      </div>
      <div
        className="tooltip_btn"
        style={{ textDecoration: "underline" }}
        onMouseDown={(evt) => makeUnderLine(evt)}
      >
        U<span className="short_cut_key">Ctrl+U</span>
      </div>
      <div
        className="tooltip_btn"
        onMouseDown={(evt) => increaseFontSize(fontSize + 1)}
      >
        A
      </div>
      <div
        style={{ fontSize: "10px", alignItems: "center" }}
        onMouseDown={(evt) => decreaseFontSize(fontSize - 1)}
      >
        A
      </div>
      <div onMouseDown={(evt) => fontColor("9AFF33")}>Color</div>
    </span>
  );
}

export default Tooltip;
