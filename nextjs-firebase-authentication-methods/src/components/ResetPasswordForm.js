import { useState } from "react";
import { useRouter } from "next/router";
import { useAuth } from "../hooks/useAuth";

const ResetPasswordForm = () => {
  const [email, setEmail] = useState("");
  const auth = useAuth();
  const router = useRouter();

  const handleResetPasswordSubmitForm = (e) => {
    e.preventDefault();

    auth.sendPasswordResetEmail(email).then(() => {
      router.push("/login");
    });
  };

  return (
    <form onSubmit={handleResetPasswordSubmitForm}>
      <div>
        <label>Email address:</label>
        <input
          type="email"
          value={email}
          onChange={({ target: { value } }) => setEmail(value)}
        />
      </div>
      <div>
        <button type="submit">Send reset link</button>
      </div>
    </form>
  );
};

export default ResetPasswordForm;
