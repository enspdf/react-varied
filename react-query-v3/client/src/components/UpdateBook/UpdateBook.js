import Loader from "react-loader-spinner";
import { useHistory, useParams } from "react-router-dom";
import { Box, Flex, Heading } from "rebass";
import { updateBook } from "../../api";
import { BookForm, Container } from "../shared";
import { useFetchBook } from "./useFetchBook";
import { useUpdateBook } from "./useUpdateBook";

export const UpdateBook = () => {
  const { id } = useParams();
  const history = useHistory();
  const { data, error, isLoading, isError } = useFetchBook(id);

  const { mutateAsync, isLoading: isMutating } = useUpdateBook(updateBook);

  const onFormSubmit = async (data) => {
    await mutateAsync({ ...data, id });

    history.push("/");
  };

  if (isLoading) {
    return (
      <Container>
        <Flex data-testid="loader" py="5" justifyContent="center">
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
