/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import YourPetTaps from "../YourPetTaps/YourPetTaps";
import InformationTaps from "../InformationTaps/InformationTaps";
import PaymentTaps from "../PaymentTaps/PaymentTaps";
import { useBookingTools } from "../../../contexts/BookingTools";

function DynamicContents() {
  const { activeSteps } = useBookingTools();
  return (
    <>
      {activeSteps === "yourPet" && <YourPetTaps />}
      {activeSteps === "information" && <InformationTaps />}
      {activeSteps === "payment" && <PaymentTaps />}
    </>
  );
}
export default DynamicContents;
