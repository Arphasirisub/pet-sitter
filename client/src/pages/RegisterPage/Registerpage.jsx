/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import InputBox from "./components/InputBox";
import LoginLink from "./components/LoginLink";
import SelectRole from "./components/SelectRole";
import validateForm from "./validateForm";
import { AlternativeLogin } from "../LoginPage/components/AlternativeLogin";
import AuthBackground from "../../public-components/AuthBackground";
import { useAuth } from "../../contexts/authentication";
import CircularProgress from "@mui/material/CircularProgress";
import SuccessModal from "./components/Modal/SuccessModal";
import ErrorModal from "./components/Modal/ErrorModal";

function RegisterPage() {
  const { register, state } = useAuth();
  const navigate = useNavigate();
  const [role, setRole] = useState("");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const [formErrors, setFormErrors] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const isValid = validateForm(formData, setFormErrors, formErrors);

    if (isValid) {
      register({
        ...formData,
        role: role,
      });
    }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
    console.log(formData);
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
          <div css={inutLayout}>
            {state.signUp.isLoading === false && (
              <>
                <SelectRole role={role} setRole={setRole} />
                {role && (
                  <InputBox
                    formData={formData}
                    handleSubmit={handleSubmit}
                    handleInputChange={handleInputChange}
                    formErrors={formErrors}
                  />
                )}
              </>
            )}
            {state.signUp.isLoading && (
              <CircularProgress size={50} color="primary" />
            )}
          </div>

          <AlternativeLogin />

          <LoginLink navigate={navigate} />
          <AuthBackground />
        </div>
      </div>
      {/* error modal */}
      <ErrorModal />
      {/* success modal */}
      <SuccessModal formData={formData} />
    </>
  );
}

const pageLayout = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  position: relative;
  gap: 1rem;
  width: 1440px;
`;
const inutLayout = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

export default RegisterPage;
