import React, { useEffect, useState, createContext, useContext } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "./authentication";

const GoogleContext = createContext();
const useGoogle = () => useContext(GoogleContext);

function GoogleProvider(props) {
  const navigate = useNavigate();
  const [isNewUser, setIsNewUser] = useState(false);
  const [userData, setUserData] = useState({
    email: "",
    full_name: "",
    picture: "",
    role: "",
  });

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

  return (
    <GoogleContext.Provider value={{ googleLogin }}>
      {props.children}
    </GoogleContext.Provider>
  );
}

export { GoogleProvider, useGoogle };
