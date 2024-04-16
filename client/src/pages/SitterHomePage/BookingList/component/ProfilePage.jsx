/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { IoIosArrowBack } from "react-icons/io";
import { FiEye } from "react-icons/fi";
import Rating from "@mui/material/Rating";
import {
  bookingButtonStyle,
  bookingListTextStyle,
  containerProfilePageStyle,
  contentStyle,
  contentTopicStyle,
  popUpDetaiPetlStyle,
  popUpDetailStyle,
  rejectButtonStyle,
  sectionContentStyle,
  sectionTopicProfilePageStyle,
  statusTextStyle,
  topicActiveButtonStyle,
  topicBookingStyle,
  topicButtonStyle,
  detailOwnerNameStyle,
  headTextStyle,
  contentTextStyle,
  viewPointButtonStyle,
  contentCardStyle,
  buttonCardStyle,
  cardImgStyle,
  cardTextStyle,
  petTypeIcon,
  popUpButtonStyle,
  petOwnerTopStyle,
  ioCloseStyle,
  petOwnerDetailStyle,
  profileDetailStyle,
  petDetailTopStyle,
  petDetailStyle,
  petProfileGroupStyle,
  imagePetStyle,
  petProfileTextStyle,
  petProfileDetailStyle,
  detailGroupLeftStyle,
  detailGroupRightStyle,
  headGroupStyle,
  questionTextStyle,
  buttonGroupStyle,
  popUpButtonCancelStyle,
  popUpButtonSendStyle,
  ratingContentStyle,
  ratingTextStyle,
} from "./ProfilePageStyle";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../../../contexts/authentication";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { IoClose } from "react-icons/io5";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Modal from "@mui/material/Modal";
import { RxDotFilled } from "react-icons/rx";

function ProfilePage({ setIsProfilePage }) {
  const navigate = useNavigate();
  const { state, checkToken } = useAuth();
  const params = useParams();
  const [bookingById, setBookingByid] = useState();
  const [open, setOpen] = useState(false);
  const [openPetDetail, setOpenPetDetail] = useState(false);
  const [openReject, setOpenReject] = useState(false);
  const [petById, setPetById] = useState();
  const [petDetail, setPetDetail] = useState([]);
  const [openRating, setOpenRating] = useState(false);
  const [rating, setRating] = useState(5);

  const getColorByStatus = (status) => {
    switch (status) {
      case "In service":
        return "#76d0fc";
      case "Waiting for confirm":
        return "#fa8ac0";
      case "Waiting for service":
        return "#ffca62";
      case "Success":
        return "#1ecd83";
      case "Canceled":
        return "#ea1110";
      default:
        return "black";
    }
  };

  const getWidthByStatus = (status) => {
    switch (status) {
      case "In service":
        return "120px";
      case "Waiting for confirm":
        return "175px";
      case "Waiting for service":
        return "122px";
      case "Success":
        return "120px";
      default:
        return "black";
    }
  };

  const getTextByStatus = (status) => {
    switch (status) {
      case "In service":
        return "Success";
      case "Waiting for confirm":
        return "Confirm Booking";
      case "Waiting for service":
        return "In Service";
      case "Success":
        return "Review";
      default:
        return "black";
    }
  };

  const getPetById = async (petId) => {
    const results = await axios.get(
      `http://localhost:4000/pets/getpet/${petId}`
    );
    setPetDetail(results.data.data);
  };

  const getOwnerAndPetById = async () => {
    const result = await axios.get(
      `http://localhost:4000/bookings/${params.bookingId}`
    );

    setBookingByid(result.data);
    setPetById(result.data.pet_bookings);
  };

  const updateStatus = async (statusChange) => {
    const result = await axios.put(
      `http://localhost:4000/bookings/${params.bookingId}`,
      { status: statusChange }
    );
    getOwnerAndPetById(params.id);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleClosePetDetail = () => {
    setOpenPetDetail(false);
  };
  const handleCloseReject = () => {
    setOpenReject(false);
  };
  const handleCloseRating = () => {
    setOpenRating(false);
  };

  useEffect(() => {
    checkToken();
    getOwnerAndPetById();
  }, []);
  return (
    <div className="container_profilepage" css={containerProfilePageStyle}>
      {bookingById && (
        <Modal
          onClose={handleClose}
          open={open}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "800px",
              background: "white",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0 40px ",
            }}
          >
            <div className="popup_petownertop" css={petOwnerTopStyle}>
              <h2>{bookingById.owners.full_name}</h2>
              <button
                onClick={() => {
                  setOpen(false);
                }}
                css={css`
                  cursor: pointer;
                `}
              >
                <IoClose css={ioCloseStyle} />
              </button>
            </div>
            <div className="popup_petownerdetail" css={petOwnerDetailStyle}>
              <div className="profile_img">
                <img
                  src={bookingById.owners.profile_img}
                  alt="profileimg"
                  css={css`
                    width: 240px;
                    height: 240px;
                    border-radius: 999px;
                    object-fit: cover;
                  `}
                />
              </div>

              <div className="profile_detail" css={profileDetailStyle}>
                <div className="detail_name" css={popUpDetailStyle}>
                  <h4 css={headTextStyle}>Pet Owner Name</h4>
                  <p css={contentTextStyle}>{bookingById.owners.full_name}</p>
                </div>
                <div className="detail_email" css={popUpDetailStyle}>
                  <h4 css={headTextStyle}>Email</h4>
                  <p css={contentTextStyle}>{bookingById.owners.email}</p>
                </div>
                <div className="detail_phone" css={popUpDetailStyle}>
                  <h4 css={headTextStyle}>Phone</h4>
                  <p css={contentTextStyle}>{bookingById.owners.phone}</p>
                </div>
                <div className="detail_id" css={popUpDetailStyle}>
                  <h4 css={headTextStyle}>ID Number</h4>
                  <p css={contentTextStyle}>{bookingById.owners.id}</p>
                </div>
                <div className="detail_birth" css={popUpDetailStyle}>
                  <h4 css={headTextStyle}>Date of Birth</h4>
                  <p css={contentTextStyle}>{bookingById.owners.birthday}</p>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      )}
      {bookingById && (
        <Modal
          onClose={handleClosePetDetail}
          open={openPetDetail}
          aria-labelledby="parent-modal-title"
          aria-describedby="parent-modal-description"
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box
            sx={{
              width: "800px",

              background: "white",
              borderRadius: "16px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              padding: "0 40px ",
            }}
          >
            <div className="popup_petdetailtop" css={petDetailTopStyle}>
              <h2>{petDetail.pet_name}</h2>
              <button
                onClick={() => {
                  setOpenPetDetail(false);
                }}
                css={css`
                  cursor: pointer;
                `}
              >
                <IoClose css={ioCloseStyle} />
              </button>
            </div>
            <div className="popup_petdetail" css={petDetailStyle}>
              <div className="profile_img" css={petProfileGroupStyle}>
                <img
                  src={petDetail.picture}
                  alt="profileimg"
                  css={imagePetStyle}
                />
                <h4 css={petProfileTextStyle}>{petDetail.pet_name}</h4>
              </div>

              <div className="petprofile_detail" css={petProfileDetailStyle}>
                <div className="detail_groupleft" css={detailGroupLeftStyle}>
                  <div className="detail_pettype" css={popUpDetaiPetlStyle}>
                    <h4 css={headTextStyle}>Pet Type</h4>
                    <p css={contentTextStyle}>{petDetail.pet_name}</p>
                  </div>
                  <div className="detail_sex" css={popUpDetaiPetlStyle}>
                    <h4 css={headTextStyle}>Sex</h4>
                    <p css={contentTextStyle}>{petDetail.sex}</p>
                  </div>
                  <div className="detail_color" css={popUpDetaiPetlStyle}>
                    <h4 css={headTextStyle}>Color</h4>
                    <p css={contentTextStyle}>{petDetail.color}</p>
                  </div>
                  <div className="detail_about" css={popUpDetaiPetlStyle}>
                    <h4 css={headTextStyle}>About</h4>
                    <p css={contentTextStyle}>
                      {petDetail.about ? petDetail.about : "-"}
                    </p>
                  </div>
                </div>

                <div className="detail_groupright" css={detailGroupRightStyle}>
                  <div className="detail_breed" css={popUpDetaiPetlStyle}>
                    <h4 css={headTextStyle}>Breed</h4>
                    <p css={contentTextStyle}>{petDetail.breed}</p>
                  </div>
                  <div className="detail_age" css={popUpDetaiPetlStyle}>
                    <h4 css={headTextStyle}>Age</h4>
                    <p css={contentTextStyle}>{petDetail.age}</p>
                  </div>
                  <div className="detail_weight" css={popUpDetaiPetlStyle}>
                    <h4 css={headTextStyle}>Weight</h4>
                    <p css={contentTextStyle}>{petDetail.weight}</p>
                  </div>
                </div>
              </div>
            </div>
          </Box>
        </Modal>
      )}
      <Modal
        open={openReject}
        onClose={handleCloseReject}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Box
          sx={{
            width: "400px",
            height: "208px",
            background: "white",
            borderRadius: "16px",
          }}
        >
          <div className="headgroup" css={headGroupStyle}>
            <h2>Reject Confirmation</h2>
            <button
              onClick={handleCloseReject}
              css={css`
                cursor: pointer;
              `}
            >
              <IoClose css={ioCloseStyle} />
            </button>
          </div>
          <p css={questionTextStyle}>Are you sure to delete this pet?</p>
          <div className="buttongroup" css={buttonGroupStyle}>
            <Button css={popUpButtonCancelStyle} onClick={handleCloseReject}>
              Cancle
            </Button>
            <Button
              css={popUpButtonStyle}
              onClick={() => {
                updateStatus("Canceled");
                handleCloseReject();
              }}
            >
              Reject Booking
            </Button>
          </div>
        </Box>
      </Modal>

      {bookingById && (
        <div className="section_topic" css={sectionTopicProfilePageStyle}>
          <div className="topic_booking" css={topicBookingStyle}>
            <div
              className="topic_activebutton"
              onClick={() => {
                setIsProfilePage(false);
                navigate(`/sitter/${state.user.id}/booking-list`);
              }}
              css={topicActiveButtonStyle}
            >
              <IoIosArrowBack />
              <h3 css={bookingListTextStyle}>Booking List</h3>
            </div>
            <div className="topic_status">
              <p
                align="right"
                css={css`
                  color: ${getColorByStatus(bookingById.status)};
                  ${statusTextStyle}
                `}
              >
                <RxDotFilled />
                {bookingById.status}
              </p>
            </div>
          </div>

          <div className="topic_bookingbutton" css={topicButtonStyle}>
            {bookingById.status === "Waiting for confirm" && (
              <button
                css={rejectButtonStyle}
                onClick={() => setOpenReject(true)}
              >
                Reject Booking
              </button>
            )}

            {bookingById.status === "Waiting for confirm" && (
              <button
                css={css`
                  width: ${getWidthByStatus(bookingById.status)};
                  ${bookingButtonStyle}
                `}
                onClick={() => updateStatus("Waiting for service")}
              >
                {getTextByStatus(bookingById.status)}
              </button>
            )}

            {bookingById.status === "Waiting for service" && (
              <button
                css={css`
                  width: ${getWidthByStatus(bookingById.status)};
                  ${bookingButtonStyle}
                `}
                onClick={() => updateStatus("In service")}
              >
                {getTextByStatus(bookingById.status)}
              </button>
            )}

            {bookingById.status === "In service" && (
              <button
                css={css`
                  width: ${getWidthByStatus(bookingById.status)};
                  ${bookingButtonStyle}
                `}
                onClick={() => updateStatus("Success")}
              >
                {getTextByStatus(bookingById.status)}
              </button>
            )}
          </div>
        </div>
      )}

      {bookingById && (
        <div className="section_content" css={sectionContentStyle}>
          <div className="content_topic" css={contentTopicStyle}>
            <div className="detail_ownername" css={detailOwnerNameStyle}>
              <h4 css={headTextStyle}>Pet Owner Name</h4>
              <p css={contentTextStyle}>{bookingById.owners.full_name}</p>
            </div>
            <div
              className="viewprofile"
              onClick={() => {
                setOpen(true);
              }}
            >
              <p css={viewPointButtonStyle}>
                <FiEye width="20px" height="18px" />
                View Profile
              </p>
            </div>
          </div>

          <div className="content" css={contentStyle}>
            <h4 css={headTextStyle}>Pet(s)</h4>
            <p css={contentTextStyle}>{bookingById.pets}</p>
          </div>

          <div className="content_card" css={contentStyle}>
            <h4 css={headTextStyle}>Pet Detail</h4>
            <div className="card" css={contentCardStyle}>
              {petById.map((pet, index) => {
                return (
                  <button
                    key={index}
                    css={buttonCardStyle}
                    onClick={() => {
                      setOpenPetDetail(true);
                      getPetById(pet.pet_id.id);
                    }}
                  >
                    <img
                      src={pet.pet_id.picture}
                      alt="petImage"
                      css={cardImgStyle}
                    />
                    <h4 css={cardTextStyle}>{pet.pet_id.pet_name}</h4>
                    <p
                      css={css`
                        ${petTypeIcon}
                        color: ${pet.pet_id.pet_type.toLowerCase() === "bird"
                          ? "rgba(118, 208, 252, 1)"
                          : pet.pet_id.pet_type.toLowerCase() === "dog"
                          ? "rgba(28, 205, 131, 1)"
                          : pet.pet_id.pet_type.toLowerCase() === "cat"
                          ? "rgba(250, 138, 192, 1)"
                          : pet.pet_id.pet_type.toLowerCase() === "rabbit"
                          ? "rgba(255, 152, 111, 1)"
                          : "transparent"};
                        background-color: ${pet.pet_id.pet_type.toLowerCase() ===
                        "bird"
                          ? "rgba(236, 251, 255, 1)"
                          : pet.pet_id.pet_type.toLowerCase() === "dog"
                          ? "rgba(231, 253, 244, 1)"
                          : pet.pet_id.pet_type.toLowerCase() === "cat"
                          ? "rgba(255, 240, 241, 1)"
                          : pet.pet_id.pet_type.toLowerCase() === "rabbit"
                          ? "rgba(255, 245, 236, 1)"
                          : "transparent"};
                      `}
                    >
                      {pet.pet_id.pet_type}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          <div className="content_dulation" css={contentStyle}>
            <h4 css={headTextStyle}>Duration</h4>
            <p css={contentTextStyle}>{bookingById.duration} hours</p>
          </div>

          <div className="content_bookingdate" css={contentStyle}>
            <h4 css={headTextStyle}>Booking Date</h4>
            <p css={contentTextStyle}>{bookingById.booked_date}</p>
          </div>

          <div className="content_totalpaid" css={contentStyle}>
            <h4 css={headTextStyle}>Total Paid</h4>
            <p css={contentTextStyle}>{bookingById.price} THB</p>
          </div>

          <div className="content_transactiondate" css={contentStyle}>
            <h4 css={headTextStyle}>Transaction Date</h4>
            <p css={contentTextStyle}>{bookingById.created_at}</p>
          </div>

          <div className="content_transaction-no" css={contentStyle}>
            <h4 css={headTextStyle}>Transaction No.</h4>
            <p css={contentTextStyle}>{bookingById.id}</p>
          </div>

          <div className="content_additionmessage" css={contentStyle}>
            <h4 css={headTextStyle}>Additional Message</h4>
            <p css={contentTextStyle}>{bookingById.message}</p>
          </div>
        </div>
      )}
    </div>
  );
}

export default ProfilePage;
