import { useState } from "react";
import { useAuth } from "../hooks/useAuth";
import { useRouter } from "next/router";
import Link from "next/link";

const LoginForm = () => {
  const auth = useAuth();
  const router = useRouter();
  const [loginCredentials, setLoginCredentials] = useState({
    email: "",
    password: "",
  });

  const handleLoginCredentialsChange = ({ target: { name, value } }) =>
    setLoginCredentials({ ...loginCredentials, [name]: value });

  const handleLoginSubmitForm = (e) => {
    e.preventDefault();

    return auth.signIn(loginCredentials).then(() => {
      router.push("/");
    });
  };

  return (
    <form onSubmit={handleLoginSubmitForm}>
      <div>
        <label>Email:</label>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={loginCredentials.email}
          onChange={handleLoginCredentialsChange}
        />
      </div>
      <div>
        <label>Password:</label>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={loginCredentials.password}
          onChange={handleLoginCredentialsChange}
        />
      </div>
      <div>
        <Link href="/reset-password">
          <a href="#!">Forgot your password?</a>
        </Link>
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

export default LoginForm;
