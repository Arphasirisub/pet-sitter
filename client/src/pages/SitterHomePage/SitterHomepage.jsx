/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Sidebar from "./components/Sidebar";
import TopBar from "./components/HeadNav";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import DynamicCompenents from "./components/DynamicComonents";

const contentStyle = css`
  display: flex;
`;

const contentContainerStyle = css`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

function SisterHomepage() {
  const params = useParams();
  const [isProfilePage, setIsProfilePage] = useState(false);
  // const [isUpdatePet, setIsUpdatePet] = useState(false);
  const [activeTaps, setActiveTaps] = useState(params.activeTaps);
  useEffect(() => {
    setActiveTaps(params.activeTaps);
  }, [params.activeTaps]);

  return (
    <div
      css={css`
        display: flex;
        justify-content: center;
      `}
    >
      <div
        css={css`
          display: flex;
          width: 100%;
          max-width: 1600px;
          position: relative;
        `}
      >
        <Sidebar
          activeTaps={activeTaps}
          setActiveTaps={setActiveTaps}
          setIsProfilePage={setIsProfilePage}
        />
        <div
          css={css`
            display: flex;
            flex-direction: column;
            width: 100%;
            margin-left: 240px;
          `}
        >
          <TopBar />
          <DynamicCompenents
            setActiveTaps={setActiveTaps}
            activeTaps={activeTaps}
            isProfilePage={isProfilePage}
            setIsProfilePage={setIsProfilePage}
          />
        </div>
      </div>
    </div>
  );
}

export default SisterHomepage;
