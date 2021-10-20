import { Send } from "@material-ui/icons";
import {
  Container,
  Title,
  Description,
  InputContainer,
  Input,
  Button,
} from "./styles";

const Newsletter = () => {
  return (
    <Container>
      <Title>Newsletter</Title>
      <Description>Get timely updates from your favorite products.</Description>
      <InputContainer>
        <Input placeholder="Your email" />
        <Button>
          <Send />
        </Button>
      </InputContainer>
    </Container>
  );
};

export default Newsletter;
