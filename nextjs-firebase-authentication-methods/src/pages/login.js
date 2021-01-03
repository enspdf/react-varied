import Link from "next/link";
import LoginForm from "../components/LoginForm";

const LoginPage = () => {
  return (
    <>
      <div>
        <h2>Log in</h2>
        <p>
          Don't have an account?{" "}
          <Link href="/signup">
            <a href="#!">Sign Up</a>
          </Link>
        </p>
      </div>
      <div>
        <LoginForm />
      </div>
    </>
  );
};

export default LoginPage;
