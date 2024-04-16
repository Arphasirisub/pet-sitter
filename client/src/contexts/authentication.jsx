import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext();
const useAuth = () => useContext(AuthContext);

function AuthProvider(props) {
  const navigate = useNavigate();

  const [state, setState] = useState({
    user: null,
    signIn: { isLoading: false, isSignInError: false },
    signUp: { isLoading: false, isSignUpError: null },
    forgetPassword: {
      isForgetPassword: false,
      isLoading: false,
      isError: false,
      isComplete: false,
    },
    isAuthenticated: Boolean(localStorage.getItem("token")),
  });

  //register
  const register = async (data) => {
    try {
      setState((prevState) => ({
        ...prevState,
        signUp: { ...prevState.signUp, isLoading: true }, // Update isLoading inside signUp
      }));

      await axios.post("http://localhost:4000/authentication/register", data);

      setState((prevState) => ({
        ...prevState,
        signUp: { ...prevState.signUp, isLoading: false, isSignUpError: false }, // Update isLoading and isSignUpError inside signUp
      }));
    } catch (error) {
      console.error("Registration failed:", error);
      setState((prevState) => ({
        ...prevState,
        signUp: { ...prevState.signUp, isLoading: false, isSignUpError: true }, // Update isLoading and isSignUpError inside signUp
      }));
    }
  };

  //login
  const login = async (data) => {
    try {
      setState((prevState) => ({
        ...prevState,
        signIn: { ...prevState.signIn, isLoading: true }, // Update isLoading inside signIn
      }));

      const response = await axios.post(
        "http://localhost:4000/authentication/login",
        data
      );

      const token = response.data.token;
      console.log("token: " + token);

      if (data.isRemember) {
        localStorage.setItem("isRemember", "true");
        localStorage.setItem("email", data.email);
      } else {
        localStorage.removeItem("isRemember");
        localStorage.removeItem("email");
      }

      const userDataFromToken = jwtDecode(token);

      setState((prevState) => ({
        ...prevState,
        user: { ...userDataFromToken },
        isAuthenticated: true,
        isSignInError: false, // Reset isSignInError on successful login
        signIn: { ...prevState.signIn, isLoading: false }, // Update isLoading inside signIn
      }));
      console.log(state);
      if (userDataFromToken.role === "pet_owner") {
        navigate("/");
      } else {
        navigate(`/sitter/${userDataFromToken.id}/booking-list`);
      }

      localStorage.setItem("token", token);
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        user: null,
        isAuthenticated: false,
        signIn: { ...prevState.signIn, isLoading: false, isSignInError: true }, // Update isLoading inside signIn
      }));
      console.log(state);
    }
  };

  //logout
  const logout = () => {
    localStorage.removeItem("token");

    setState({ ...state, user: null });
    console.log(localStorage);
    navigate("/login");
  };

  //forget password flow
  const forgetPassword = async (email) => {
    try {
      setState((prevState) => ({
        ...prevState,
        forgetPassword: {
          ...prevState.forgetPassword,
          isLoading: true,
          isError: false,
          isComplete: false,
        },
      }));
      await new Promise((resolve) => setTimeout(resolve, 2000));
      await axios.put("http://localhost:4000/authentication/forgotPassword", {
        email,
      });

      setState((prevState) => ({
        ...prevState,
        forgetPassword: {
          ...prevState.forgetPassword,
          isLoading: false,
          isComplete: true,
        },
      }));
    } catch (error) {
      setState((prevState) => ({
        ...prevState,
        forgetPassword: {
          ...prevState.forgetPassword,
          isLoading: false,
          isError: true,
        },
      }));
    }
  };

  const checkOTP = async (forgetEmail, OTP) => {
    try {
      const response = await axios.post(
        "http://localhost:4000/authentication/forgotPasswordOTP",
        {
          email: forgetEmail,
          token: OTP,
        }
      );
      console.log(response.data);
    } catch (error) {
      console.error("Error:", error.message);
    }
  };

  const updatePassword = async (email, password) => {
    try {
      const response = await axios.put(
        `http://localhost:4000/authentication/updatePassword`,
        {
          email,
          password,
        }
      );

      console.log("Password updated successfully");
    } catch (error) {
      console.error("Error updating password:", error.message);
      throw error;
    }
  };

  //decode token
  const checkToken = () => {
    try {
      const storedToken = localStorage.getItem("token");

      if (!storedToken) {
        setState((prevState) => ({
          ...prevState,
          isAuthenticated: false,
          user: null, // Clear user data when token is not available
        }));
        return;
      }

      // Decode token to extract user data
      const userDataFromToken = jwtDecode(storedToken);
      console.log(userDataFromToken);

      setState((prevState) => ({
        ...prevState,
        user: userDataFromToken,
        isAuthenticated: true,
      }));
    } catch (error) {
      console.error("Error decoding token:", error);

      setState((prevState) => ({
        ...prevState,
        isAuthenticated: false,
        user: null, // Clear user data in case of error
      }));
    }
  };

  return (
    <AuthContext.Provider
      value={{
        state,
        setState,
        checkToken,
        login,
        logout,
        register,
        forgetPassword,
        checkOTP,
        updatePassword,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export { AuthProvider, useAuth };
