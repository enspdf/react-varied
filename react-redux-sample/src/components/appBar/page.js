import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";
import { AccountCircle } from "@material-ui/icons";
import Autocomplete from "../autocomplete";
import "./styles.css";

function Page(props) {
  const { text, suggestions, onChangeText, onChangeSelection } = props;

  return (
    <AppBar position="static">
      <Toolbar className="appbar">
        <Typography variant="h6" color="inherit">
          React Redux Example
        </Typography>
        <Autocomplete
          text={text}
          suggestions={suggestions}
          onChangeText={onChangeText}
          onChangeSelection={onChangeSelection}
        />
        <AccountCircle />
      </Toolbar>
    </AppBar>
  );
}

export default Page;
