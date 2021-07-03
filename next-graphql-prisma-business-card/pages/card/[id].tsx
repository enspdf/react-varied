import { gql, GraphQLClient } from "graphql-request";

export const getServerSideProps = async ({ params }) => {
  const cardId = params.id;
  const endpoint = "/api/graphql";

  const graphqlClient = new GraphQLClient(endpoint, {});
  const query = gql`
    query GetCard($id: String!) {
      getCard(id: $id) {
        name
        email
        phone
        biography
        twitter
        github
        website
      }
    }
  `;

  const variables = { id: cardId };
  const data = await graphqlClient.request(query, variables);
  const card = data.getCard;

  return {
    props: {
      card,
    },
  };
};

export default function IDPage({ card }) {
  return <div>{JSON.stringify(card)}</div>;
}
