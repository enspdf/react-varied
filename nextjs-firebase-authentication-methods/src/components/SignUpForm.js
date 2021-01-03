import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";

const SignUpForm = () => {
  const auth = useAuth();
  const router = useRouter();

  const [signUpCredentials, setSignUpCredentials] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleSignUpCredentialsChange = ({ target: { name, value } }) =>
    setSignUpCredentials({ ...signUpCredentials, [name]: value });

  const handleSignUpSubmitForm = (e) => {
    e.preventDefault();

    return auth.signUp(signUpCredentials).then(() => {
      router.push("/");
    });
  };

  return (
    <form onSubmit={handleSignUpSubmitForm}>
      <div>
        <label>Name:</label>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={signUpCredentials.name}
          onChange={handleSignUpCredentialsChange}
        />
      </div>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={signUpCredentials.email}
          onChange={handleSignUpCredentialsChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={signUpCredentials.password}
          onChange={handleSignUpCredentialsChange}
        />
      </div>
      <div>
        <button type="submit">Sign up</button>
      </div>
    </form>
  );
};

export default SignUpForm;
