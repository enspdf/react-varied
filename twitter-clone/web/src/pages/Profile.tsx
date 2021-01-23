import { gql, useQuery } from "@apollo/client";
import CreateProfile from "../components/CreateProfile";

export const ME_QUERY = gql`
  query me {
    me {
      id
    }
  }
`;

function Profile() {
  const { loading, error, data } = useQuery(ME_QUERY);
  if (loading) return <p>Loading...</p>;
  if (error) return <p>{error.message}</p>;

  return (
    <div className="container">
      <h1>Profile</h1>
      <CreateProfile />
      {/* {data.me.Profile.id ? } */}
      {/* <p>{data.me.Profile.bio}</p>
      <p>{data.me.Profile.location}</p>
      <p>{data.me.Profile.website}</p> */}
    </div>
  );
}

export default Profile;
