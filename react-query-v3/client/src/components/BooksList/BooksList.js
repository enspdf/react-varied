import { useQuery } from "react-query";
import { Flex } from "rebass/styled-components";
import Loader from "react-loader-spinner";

import { Container } from "../shared/Container";
import { getAllBooks } from "../../api";
import { BookItem } from "./BookItem";

export const BooksList = () => {
  const { data, error, isLoading, isError } = useQuery("books", getAllBooks);

  if (isLoading) {
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          <Loader type="ThreeDots" color="#ccc" height={30} />
        </Flex>
      </Container>
    );
  }

  if (isError) {
    return <span>Error: {error}</span>;
  }

  return (
    <Container>
      <Flex flexDirection="column" alignItems="center">
        {data.map(({ author, title, id }) => (
          <BookItem author={author} title={title} id={id} key={id} />
        ))}
      </Flex>
    </Container>
  );
};
