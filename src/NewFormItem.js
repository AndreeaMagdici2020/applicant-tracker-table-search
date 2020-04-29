import React from "react";
const NewFormItem = (props) => {
  return (
    <tr>
      <td>{props.prenume}</td>
      <td>{props.nume}</td>
      <td>{props.mail}</td>
      <td>{props.phone}</td>
      <td>{props.lastEmployer}</td>
      <td>{props.currentTitle}</td>
    </tr>
  );
};
export default NewFormItem;
