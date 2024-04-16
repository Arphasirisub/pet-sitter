/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { TextField } from "@mui/material";

function InputBox({ formData, handleSubmit, handleInputChange, formErrors }) {
  return (
    <>
      <form
        css={css`
          display: flex;
          flex-direction: column;
          gap: 1rem;
          width: 30%;
        `}
        onSubmit={handleSubmit}
      >
        <TextField
          label="Your Name"
          variant="outlined"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          error={!!formErrors.name}
          helperText={formErrors.name}
        />
        <TextField
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          error={!!formErrors.email}
          helperText={formErrors.email}
        />
        <TextField
          label="Phone"
          type="tel"
          variant="outlined"
          name="phone"
          value={formData.phone}
          onChange={handleInputChange}
          error={!!formErrors.phone}
          helperText={formErrors.phone}
        />

        <TextField
          label="Password"
          type="password"
          variant="outlined"
          name="password"
          value={formData.password}
          onChange={handleInputChange}
          error={!!formErrors.password}
          helperText={formErrors.password}
          autoComplete="current-password"
        />

        <button
          type="submit"
          variant="contained"
          color="primary"
          css={css`
            background-color: rgb(255, 112, 55);
            border-radius: 20px;
            padding: 12px;
            border: none;
            color: white;
            font-size: 16px;
            &:hover {
              cursor: pointer;
            }
          `}
        >
          Register
        </button>
      </form>
    </>
  );
}

export default InputBox;
