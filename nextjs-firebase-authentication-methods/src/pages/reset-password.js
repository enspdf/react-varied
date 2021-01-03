import Link from "next/link";
import ResetPasswordForm from "../components/ResetPasswordForm";

const ResetPasswordPage = () => {
  return (
    <>
      <div>
        <h2>Reset password</h2>
        <p>
          Did't forgot?{" "}
          <Link href="/login">
            <a href="#!">Login</a>
          </Link>
        </p>
      </div>
      <div>
        <ResetPasswordForm />
      </div>
    </>
  );
};

export default ResetPasswordPage;
