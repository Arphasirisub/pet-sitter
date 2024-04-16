import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "./authentication";

const AlternativeLoginContext = createContext();
const useAlternativeLogin = () => useContext(AlternativeLoginContext);

function AlternativeLoginProvider(props) {
  const navigate = useNavigate();
  const [isNewUser, setIsNewUser] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    full_name: "",
    picture: "",
    role: "",
  });
  const { setState } = useAuth();

  const facebookLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/facebook/facebookLogin"
      );
      console.log(response);
      const url = response.data.data.url;

      window.location.href = url; //this url for check facebook login if pass, will go to my homepage webside and we can get token at url
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const googleLogin = async () => {
    try {
      const response = await axios.post(
        "http://localhost:4000/google/googleLogin"
      );
      console.log(response);
      const url = response.data.data.url;

      window.location.href = url; //this url for check facebook login if pass, will go to my homepage webside and we can get token at url
    } catch (error) {
      console.error("Error:", error);
    }
  };

  const alternativeLoginToken = async (accessToken) => {
    try {
      const response = await axios.post(
        `http://localhost:4000/authentication/alternativeLogin/accessToken/${accessToken}`
      );

      const { existUser, newUser } = response.data;

      if (existUser) {
        const userDataFromToken = jwtDecode(existUser.token);

        setState((prevState) => ({
          ...prevState,
          user: { ...userDataFromToken },
          isAuthenticated: true,
        }));
        console.log(existUser.token);
        localStorage.setItem("token", existUser.token);
        navigate("/");
      } else if (newUser) {
        setIsNewUser(true);
        setUserData({
          id: newUser.id,
          email: newUser.email,
          full_name: newUser.full_name,
          picture: newUser.picture,
          role: "pet_owner", //set default select value to "Pet Owner"
        });
        console.log(newUser);
        navigate("/");
      }
    } catch (error) {
      // Handle errors
      console.error("Error:", error);
    }
  };

  const updateUser = async (data) => {
    const response = await axios.put(
      "http://localhost:4000/authentication/alternativeLogin/updateUser",
      data
    );
    const token = response.data.token;
    const userDataFromToken = jwtDecode(token);

    setState((prevState) => ({
      ...prevState,
      user: { ...userDataFromToken },
      isAuthenticated: true,
    }));
    localStorage.setItem("token", token);
    navigate("/");
  };

  return (
    <AlternativeLoginContext.Provider
      value={{
        facebookLogin,
        alternativeLoginToken,
        isNewUser,
        setIsNewUser,
        userData,
        setUserData,
        updateUser,
        googleLogin,
      }}
    >
      {props.children}
    </AlternativeLoginContext.Provider>
  );
}

export { AlternativeLoginProvider, useAlternativeLogin };
