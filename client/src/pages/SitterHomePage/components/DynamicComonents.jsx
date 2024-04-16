import PetSitterProfile from "../PetSitterProfile/PetSitterProfile";
import PayoutOption from "../PayOutOption/PayoutOption";
import BookingList from "../BookingList/BookingList";
import ProfilePage from "../BookingList/component/ProfilePage";

function DynamicComponents({ activeTaps, isProfilePage, setIsProfilePage }) {
  return (
    <>
      {activeTaps === "pet-sitter-profile" && <PetSitterProfile />}
      {activeTaps === "booking-list" && !isProfilePage && (
        <BookingList setIsProfilePage={setIsProfilePage} />
      )}
      {activeTaps === "booking-list" && isProfilePage && (
        <ProfilePage setIsProfilePage={setIsProfilePage} />
      )}
      {activeTaps === "payout-option" && <PayoutOption />}
    </>
  );
}

export default DynamicComponents;
