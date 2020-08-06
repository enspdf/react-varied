import React, { useState } from "react";

export default function Form() {
  const [emailAddress, setEmailAddress] = useState("");
  const [password, setPassword] = useState("");
  const isInvalid = password === "" || emailAddress === "";

  const handleSignIn = (event) => {
    event.preventDefault();
  };

  return (
    <form onSubmit={handleSignIn}>
      <input
        required
        type="text"
        placeholder="Email address"
        value={emailAddress}
        onChange={({ target }) => setEmailAddress(target.value)}
      />
      <input
        required
        type="password"
        placeholder="Password"
        value={password}
        autoComplete="off"
        onChange={({ target }) => setPassword(target.value)}
      />
      <button type="submit" disabled={isInvalid}>
        Sign In
      </button>
    </form>
  );
}
