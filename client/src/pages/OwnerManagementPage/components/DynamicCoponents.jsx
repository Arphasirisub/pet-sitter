/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import BookingHistoryTap from "../BookingHistoryTap/BookingHistoryTap";
import ProfileTap from "../ProfileTap/ProfileTap";
import YourPetPage from "../YourPetTap/YourPetPage/YourPetPage.jsx";
import CreatePetPage from "../YourPetTap/CreatePetPage/CreatePetPage.jsx";
import UpdatePetPage from "../YourPetTap/UpdatePetPage/UpdatePetPage.jsx";

function DynamicComponents({
  activeTaps,
  isCreatePet,
  setIsCreatePet,
  isUpdatePet,
  setIsUpdatePet,
}) {
  const [allPet, setAllPet] = useState([]);

  return (
    <div
      css={css`
        width: 956px;
        height: 100%;
        background-color: rgb(255, 255, 255);
        border-radius: 10px;
        box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      `}
    >
      {activeTaps === "profile" && <ProfileTap />}
      {activeTaps === "yourPet" && !isCreatePet && !isUpdatePet && (
        <YourPetPage
          setIsCreatePet={setIsCreatePet}
          isCreatePet={isCreatePet}
          setIsUpdatePet={setIsUpdatePet}
          setAllPet={setAllPet}
        />
      )}
      {activeTaps === "yourPet" && isCreatePet && (
        <CreatePetPage
          setIsCreatePet={setIsCreatePet}
          setIsUpdatePet={setIsUpdatePet}
        />
      )}
      {activeTaps === "yourPet" && isUpdatePet && (
        <UpdatePetPage
          setIsCreatePet={setIsCreatePet}
          setIsUpdatePet={setIsUpdatePet}
          allPet={allPet}
        />
      )}
      {activeTaps === "bookingHistory" && <BookingHistoryTap />}
    </div>
  );
}

export default DynamicComponents;
