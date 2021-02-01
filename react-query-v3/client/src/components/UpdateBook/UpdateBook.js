import { useParams, useHistory } from "react-router-dom";
import { useMutation, useQuery } from "react-query";
import { getBook, updateBook } from "../../api";
import { Container, BookForm } from "../shared";
import { Box, Flex, Heading } from "rebass";
import Loader from "react-loader-spinner";

export const UpdateBook = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, error, isLoading, isError } = useQuery(
    ["books", { id }],
    getBook
  );

  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id });

    history.push("/");
  };

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
    return (
      <Container>
        <Flex py="5" justifyContent="center">
          Error: {error.message}
        </Flex>
      </Container>
    );
  }

  return (
    <Container>
      <Box sx={{ py: 3 }}>
        <Heading sx={{ marginBottom: 3 }}>Update Book</Heading>
        <BookForm
          defaultValues={data}
          onFormSubmit={onFormSubmit}
          isLoading={isMutating}
        />
      </Box>
    </Container>
  );
};
