import { useRequireAuth } from "../hooks/useRequireAuth";

const IndexPage = () => {
  const auth = useRequireAuth();

  if (!auth?.user) return null;

  return (
    <div>
      <h2>{`Welcome ${auth.user.name}!`}</h2>
      <p>{`You are loggedin with ${auth.user.email}`}</p>
      <div>
        <button onClick={auth.signOut}>Sign out</button>
      </div>
    </div>
  );
};

export default IndexPage;
