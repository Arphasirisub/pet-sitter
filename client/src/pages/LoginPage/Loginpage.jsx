/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { AlternativeLogin } from "./components/AlternativeLogin";
import { Header } from "./components/Header";
import { InputBox } from "./components/InputBox";
import { SignUpLink } from "./components/SignUpLink";
import AuthBackground from "../../public-components/AuthBackground";
import { useAuth } from "../../contexts/authentication";
import CircularProgress from "@mui/material/CircularProgress";
import InvalidUsernameModal from "./components/Modal/InvalidUsernameModal";
import ForgetPasswordModal from "./components/Modal/ForgetPasswordModal";

function LoginPage() {
  const navigate = useNavigate();
  const { login, state } = useAuth();

  const [formData, setFormData] = useState(() => {
    const storedIsRemember = localStorage.getItem("isRemember");
    const storedEmail = localStorage.getItem("email");
    return {
      email: storedEmail || "",
      password: "",
      isRemember: storedIsRemember === "true",
    };
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login({
      email: formData.email,
      password: formData.password,
      isRemember: formData.isRemember,
    });
  };

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;

    if (type === "checkbox" && name === "isRemember") {
      localStorage.setItem("isRemember", checked);
    }

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  return (
    <>
      {/* page */}
      <div
        css={css`
          display: flex;
          justify-content: center;
        `}
      >
        <div css={pageLayout}>
          <Header />
          {state.signIn.isLoading ? (
            <CircularProgress size={50} color="primary" />
          ) : (
            <>
              <form css={formLayout} onSubmit={handleSubmit}>
                <InputBox
                  formData={formData}
                  handleInputChange={handleInputChange}
                />
              </form>
              <AlternativeLogin />
            </>
          )}

          <SignUpLink navigate={navigate} />
          <AuthBackground />
        </div>
      </div>

      {/*forget password modal */}
      <ForgetPasswordModal />

      {/*invalid user modal */}
      <InvalidUsernameModal />
    </>
  );
}

const pageLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  gap: 1rem;
  position: relative;
  height: 100vh;
  width: 1440px;
`;

const formLayout = css`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  width: 30%;
`;

export default LoginPage;
