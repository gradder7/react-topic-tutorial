import React, { useState } from "react";
import ReactDOM from "react-dom";

const container = document.getElementById("modal");
export default function Portals() {
  const [open, setOpen] = useState(false);
  return (
    <div style={{ textAlign: "center", marginTop: "200px" }}>
      <button
        style={{
          fontSize: "30px",
          width: "200px",
          background: "green",
          border: "1px solid red",
          borderRadius: "10px",
        }}
        onClick={() => setOpen(!open)}
      >
        {open ? "Hide" : "Show"}
      </button>
      {open && <ModalContent />}
    </div>
  );
}

export const ModalContent = () => {
  return ReactDOM.createPortal(<div style={{textAlign:"center"}}>hello world</div>, container);
};
