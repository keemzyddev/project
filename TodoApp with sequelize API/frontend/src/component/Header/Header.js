import React from "react";
import { FaPlusCircle, FaTimes } from "react-icons/fa";

const Header = ({ onAdd, showAdd }) => {
  return (
    <header className="header">
      <h1
        style={{
          border: "1px solid Black",
          borderRadius: "5px",
          backgroundColor: "lightgreen",
          padding: "5px",
        }}
      >
        {" "}
        Todo list{" "}
      </h1>{" "}
      {showAdd ? (
        <FaTimes style={{ color: "red", cursor: "pointer" }} onClick={onAdd} />
      ) : (
        <FaPlusCircle style={{ cursor: "pointer" }} onClick={onAdd} />
      )}
    </header>
  );
};

export default Header;
