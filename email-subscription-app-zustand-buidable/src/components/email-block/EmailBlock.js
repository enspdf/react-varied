import React from "react";
import { Box, Text, Heading } from "grommet";
import { TextField } from "@material-ui/core";
import theme from "../../theme";
import Button from "./Button";
import LoadingBlock from "./LoadingBlock";
import { useStore } from "./logic/store";
import { useDispatchEmailFlow } from "./logic/flows";

const { colors } = theme;

const WrapperBox = ({ children }) => (
  <Box
    elevation={"large"}
    width={"500px"}
    round="8px"
    background={colors.white}
    pad={"large"}
    gap={"medium"}
  >
    {children}
  </Box>
);

const EmailBlock = () => {
  const [isLoading, isProcessing] = useStore((state) => [
    state.loading,
    state.processing,
  ]);

  const [content, currentButtonText] = useStore((state) => [
    state.content,
    state.currentButtonText,
  ]);

  const dispatch = useDispatchEmailFlow();

  return (
    <>
      {isLoading && (
        <WrapperBox>
          <LoadingBlock />
        </WrapperBox>
      )}
      {!isLoading && (
        <WrapperBox>
          <Heading level={1} color={colors.black}>
            {content.title}
          </Heading>
          <Text size={"medium"}>{content.subTitle}</Text>
          <TextField {...content.input} />
          <Button
            type="submit"
            onClick={(e) => {
              e.preventDefault();
              dispatch();
            }}
            disabled={isProcessing}
            background={colors.primary}
            color={colors.white}
            style={{
              paddingTop: "16px",
              paddingBottom: "16px",
            }}
          >
            {currentButtonText}
          </Button>
        </WrapperBox>
      )}
    </>
  );
};

export default EmailBlock;
