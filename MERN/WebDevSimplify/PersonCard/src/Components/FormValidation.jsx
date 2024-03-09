import React, { useState, useMemo } from "react";
import { checkEmail, checkPassword } from "../Customs/validators";

const FormValidation = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isAfterFirstSubmit, setIsAfterFirstSubmit] = useState(false);

  const emailErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkEmail(email) : [];
  }, [isAfterFirstSubmit, email]);

  const passwordErrors = useMemo(() => {
    return isAfterFirstSubmit ? checkPassword(password) : [];
  }, [isAfterFirstSubmit, password]);

  function onSubmit(e) {
    e.preventDefault();
    setIsAfterFirstSubmit(true);

    const emailResults = checkEmail(email);
    const passwordResults = checkPassword(password);

    if (emailResults.length === 0 && passwordResults.length === 0) {
      alert("Success")
    }
  }

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label htmlFor="email">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {emailErrors.length > 0 && <div>{emailErrors.join(", ")}</div>}
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        {passwordErrors.length > 0 && (
          <div>
            {passwordErrors.map((item, index) => (
              <div key={index}>{item}</div>
            ))}
          </div>
        )}
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default FormValidation;
