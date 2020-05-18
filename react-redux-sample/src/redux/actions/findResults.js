export const type = "findResults";

const findResults = (text) => {
  return {
    type,
    payload: text,
  };
};

export default findResults;
