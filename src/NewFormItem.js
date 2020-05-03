import React from "react";
//import Checkbox from "@material-ui/core/Checkbox";

const NewFormItem = (props) => {
  return (
    <tr>
      <td>{props.prenume}</td>
      <td>{props.nume}</td>
      <td>{props.mail}</td>
      <td>{props.phone}</td>
      <td>{props.lastEmployer}</td>
      <td>{props.currentTitle}</td>
      <td>
        {/* <Checkbox
          name="Selected"
          color="primary"
          inputProps={{ "aria-label": "secondary checkbox" }}
          onChange={props.onSelectApplicant}
        /> */}
        <input
          type="checkbox"
          defaultChecked={props.checked}
          onChange={props.onSelectApplicant}
        ></input>
      </td>
      <td>{props.id}</td>
    </tr>
  );
};
export default NewFormItem;
