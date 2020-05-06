import React from "react";

const Element = (props) => {
  return (
    <tr>
      <td>{props.user.prenume}</td>
      <td>{props.user.nume}</td>
    </tr>
  );
};

export default Element;
