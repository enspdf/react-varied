import React from "react";
import { ThemeProvider, CSSReset } from "@chakra-ui/core";
import PrettyForm from "./PrettyForm";

export default function App() {
  return (
    <ThemeProvider>
      <CSSReset />
      <PrettyForm />
    </ThemeProvider>
  );
}
