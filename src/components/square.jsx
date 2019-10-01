import React from "react";

const Square = ({ value, event }) => {
  return (
    <button className={"square" + (value ? " selected" : "")} onClick={event}>
      {value}
    </button>
  );
};

export default Square;
 