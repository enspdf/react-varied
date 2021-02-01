import { useMutation } from "react-query";
import { updateBook } from "../../api";

export const useUpdateBook = () => {
  const { mutateAsync, isLoading: isMutating } = useMutation(updateBook);

  return { mutateAsync, isMutating };
};
