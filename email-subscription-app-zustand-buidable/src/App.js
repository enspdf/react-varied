import { Box, Image } from "grommet";
import { makeStyles } from "@material-ui/core";
import React from "react";
import EmailBlock from "./components/email-block";
import "./styles.css";
import logo from "./assets/images/logo.svg";
import theme from "./theme";

const useStyle = makeStyles({
  root: {
    background:
      "url(https://images.unsplash.com/photo-1601933552406-c6ea0739a098?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=3300&q=80)",
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center center",
  },
});

export default function App() {
  const classes = useStyle();
  return (
    <Box
      width="100%"
      pad="xlarge"
      height="100vh"
      gap="large"
      className={classes.root}
    >
      <Image src={logo} width={300} />
      <EmailBlock />
    </Box>
  );
}
