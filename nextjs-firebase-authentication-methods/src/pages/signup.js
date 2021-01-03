import Link from "next/link";
import SignUpForm from "../components/SignUpForm";

const SignUpPage = () => {
  return (
    <>
      <div>
        <h2>Sign up</h2>
        <p>
          already have an account{" "}
          <Link href="/login">
            <a href="#!">Log in</a>
          </Link>
        </p>
      </div>
      <div>
        <SignUpForm />
      </div>
    </>
  );
};

export default SignUpPage;
