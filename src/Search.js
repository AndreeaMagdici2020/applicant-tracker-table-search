import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1),
      width: "25ch",
    },
  },
}));
const Search = (props) => {
  const classes = useStyles();
  const { handleChange } = props;
  return (
    <div>
      <form className={classes.root} noValidate autoComplete="off">
        <TextField
          id="outlined-basic"
          label="Search"
          variant="outlined"
          onChange={handleChange}
        />
      </form>
    </div>
  );
};

export default Search;
