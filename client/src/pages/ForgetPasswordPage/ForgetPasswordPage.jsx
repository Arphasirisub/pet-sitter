import React, { useState } from "react";
/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import AuthBackground from "../../public-components/AuthBackground";
import TextField from "@mui/material/TextField";
import { Button } from "@mui/material";

import { useAuth } from "../../contexts/authentication";

function ForgetPasswordPage() {
  const [email, setEmail] = useState(""); // State to manage the email input
  const [password, setPassword] = useState("");
  const [otp, setOtp] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { checkOTP, updatePassword } = useAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setIsLoading(true);
      await checkOTP(email, otp); // Use the email state instead of params.email
      await updatePassword(email, password); // Use the email state instead of params.email
      setIsLoading(false);
      setMessage("Password updated successfully");
      console.log("Password updated successfully");
    } catch (error) {
      setIsLoading(false);
      setMessage("Error updating password");
      console.error("Error updating password:", error.message);
    }
  };

  return (
    <div
      css={css`
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        height: 100vh;
        gap: 1rem;
        position: relative;
      `}
    >
      <form
        onSubmit={handleSubmit}
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 30%;
        `}
      >
        <h2>Update your password</h2>
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <TextField
          id="otp"
          label="One-Time Password (OTP)"
          variant="outlined"
          type="number"
          value={otp}
          onChange={(e) => setOtp(e.target.value)}
        />
        <TextField
          id="password"
          label="New Password"
          variant="outlined"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button variant="contained" type="submit" disabled={isLoading}>
          {isLoading ? "Updating Password..." : "Update Password"}
        </Button>
      </form>
      <p>{message}</p>
      {/* AuthBackground component */}
      <AuthBackground />
    </div>
  );
}

export default ForgetPasswordPage;
