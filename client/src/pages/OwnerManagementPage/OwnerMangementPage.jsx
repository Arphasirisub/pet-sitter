/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Navbar from "../../public-components/Navbar";
import SideBar from "./components/SideBar";
import DynamicComponents from "./components/DynamicCoponents";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
function OwnerMangementPage() {
  const params = useParams();

  const [activeTaps, setActiveTaps] = useState(params.activeTaps);
  useEffect(() => {
    setActiveTaps(params.activeTaps);
  }, [params.activeTaps]);

  const [isCreatePet, setIsCreatePet] = useState(false);
  const [isUpdatePet, setIsUpdatePet] = useState(false);
  return (
    <>
      <Navbar />
      <div
        css={css`
          display: flex;
          width: 100vw;
          height: 100%;
          justify-content: center;
          gap: 3%;
          padding-top: 40px;
          background-color: rgb(250, 250, 251);
          padding: 40px 0 80px 0;
        `}
      >
        <SideBar
          setActiveTaps={setActiveTaps}
          activeTaps={activeTaps}
          isCreatePet={isCreatePet}
          setIsCreatePet={setIsCreatePet}
          isUpdatePet={isUpdatePet}
          setIsUpdatePet={setIsUpdatePet}
        />
        <DynamicComponents
          activeTaps={activeTaps}
          isCreatePet={isCreatePet}
          setIsCreatePet={setIsCreatePet}
          isUpdatePet={isUpdatePet}
          setIsUpdatePet={setIsUpdatePet}
        />
      </div>
    </>
  );
}
export default OwnerMangementPage;
