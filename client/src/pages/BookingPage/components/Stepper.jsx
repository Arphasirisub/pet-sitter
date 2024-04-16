/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Bs1CircleFill, Bs2CircleFill, Bs3CircleFill } from "react-icons/bs";
import { useBookingTools } from "../../../contexts/BookingTools";
function Stepper() {
  const { activeSteps, completeStep } = useBookingTools();
  return (
    <div
      css={css`
        height: 100px;
        box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.1);
        border-radius: 10px;
        display: flex;
        align-items: center;
        justify-content: space-evenly;
      `}
    >
      <div
        css={css`
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
        `}
      >
        <div
          css={css`
            width: 35px;
            height: 35px;
            border-radius: 100%;
            background-color: ${activeSteps === "yourPet" &&
            "rgb(255, 112, 55)"};
            background-color: ${activeSteps !== "yourPet" &&
            !completeStep.yourPet &&
            "rgb(245, 246, 249)"};
            background-color: ${activeSteps !== "yourPet" &&
            completeStep.yourPet &&
            "rgb(0, 0, 0)"};

            color: ${activeSteps === "yourPet" && "rgb(255, 255, 255)"};
            color: ${activeSteps !== "yourPet" &&
            !completeStep.yourPet &&
            "rgb(123, 126, 143)"};
            color: ${activeSteps !== "yourPet" &&
            completeStep.yourPet &&
            "rgb(255, 112, 55)"};

            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
          `}
        >
          1
        </div>
        <div> Your Pet</div>
      </div>
      <div
        css={css`
          color: ${activeSteps === "information"
            ? "rgb(255, 112, 55)"
            : "rgb(123, 126, 143)"};
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
        `}
      >
        <div
          css={css`
            width: 35px;
            height: 35px;
            border-radius: 100%;
            background-color: ${activeSteps === "information" &&
            "rgb(255, 112, 55)"};
            background-color: ${activeSteps !== "information" &&
            !completeStep.information &&
            "rgb(245, 246, 249)"};
            background-color: ${activeSteps !== "information" &&
            completeStep.information &&
            "rgb(0, 0, 0)"};

            color: ${activeSteps === "information" && "rgb(255, 255, 255)"};
            color: ${activeSteps !== "information" &&
            !completeStep.information &&
            "rgb(123, 126, 143)"};
            color: ${activeSteps !== "information" &&
            completeStep.information &&
            "rgb(255, 112, 55)"};

            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
          `}
        >
          <span>2</span>
        </div>{" "}
        Information
      </div>
      <div
        css={css`
          color: ${activeSteps === "payment"
            ? "rgb(255, 112, 55)"
            : "rgb(123, 126, 143)"};
          display: flex;
          justify-content: center;
          align-items: center;
          gap: 5px;
        `}
      >
        <div
          css={css`
            width: 35px;
            height: 35px;
            border-radius: 100%;
            background-color: ${activeSteps === "payment" &&
            "rgb(255, 112, 55)"};
            background-color: ${activeSteps !== "payment" &&
            !completeStep.payment &&
            "rgb(245, 246, 249)"};
            background-color: ${activeSteps !== "payment" &&
            completeStep.payment &&
            "rgb(0, 0, 0)"};

            color: ${activeSteps === "payment" && "rgb(255, 255, 255)"};
            color: ${activeSteps !== "payment" &&
            !completeStep.payment &&
            "rgb(123, 126, 143)"};
            color: ${activeSteps !== "payment" &&
            completeStep.payment &&
            "rgb(255, 112, 55)"};

            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 20px;
          `}
        >
          <span>3</span>
        </div>
        Payment
      </div>
    </div>
  );
}
export default Stepper;
