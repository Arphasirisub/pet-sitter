/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

export const contentStyle = css`
  padding: 0px 70px;
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const popUpDetailStyle = css`
  display: flex;
  flex-direction: column;
  width: 392px;
  gap: 4px;
`;

export const popUpDetaiPetlStyle = css`
  display: flex;
  flex-direction: column;
  width: 176px;
  gap: 4px;
`;

export const containerProfilePageStyle = css`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 40px 40px 40px 40px;
  height: 1024px;
  gap: 24px;
  background-color: rgba(246, 246, 249, 1);
`;

//section topic profile page

export const sectionTopicProfilePageStyle = css`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 1120px;
`;

export const topicBookingStyle = css`
  display: flex;
  gap: 24px;
`;

export const topicActiveButtonStyle = css`
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 10px;
`;

export const bookingListTextStyle = css`
  color: rgba(42, 46, 63, 1);
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  margin: 0;
`;

export const statusTextStyle = css`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 15px;
`;
export const topicButtonStyle = css`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const rejectButtonStyle = css`
  width: 160px;
  border-radius: 99px;
  padding: 12px 24px;
  cursor: pointer;
  background-color: rgba(255, 241, 236, 1);
  color: rgba(255, 112, 55, 1);
`;

export const bookingButtonStyle = css`
  border-radius: 99px;
  padding: 12px 24px;
  cursor: pointer;
  background-color: rgba(255, 112, 55, 1);
  color: white;
  margin-left: 8px;
`;

//section content proflie page
export const sectionContentStyle = css`
  width: 1120px;
  height: 1024px;
  background-color: white;
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  gap: 24px;
`;

export const contentTopicStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  padding: 30px 70px 0px 70px;
`;

export const detailOwnerNameStyle = css`
  display: flex;
  flex-direction: column;
  gap: 4px;
`;

export const headTextStyle = css`
  font-size: 20px;
  font-weight: 700;
  color: rgba(174, 177, 195, 1);
  margin: 0;
`;

export const contentTextStyle = css`
  font-size: 16px;
  font-weight: 500;
  margin: 0;
`;

export const viewPointButtonStyle = css`
  font-size: 16px;
  font-weight: 700;
  color: rgba(255, 112, 55, 1);
  margin: 0;
  display: flex;
  align-items: center;
  gap: 4px;
  cursor: pointer;
`;

export const contentCardStyle = css`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  align-items: center;
  gap: 16px;
`;

export const buttonCardStyle = css`
  width: 207px;
  height: 236px;
  border: 1px solid rgba(220, 223, 237, 1);
  border-radius: 16px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  background-color: rgb(255, 255, 255);
  gap: 16px;
`;

export const cardImgStyle = css`
  width: 104px;
  height: 104px;
  object-fit: cover;
  border-radius: 100%;
`;

export const cardTextStyle = css`
  font-size: 20px;
  font-weight: 700;
  text-align: center;
  width: 159px;
  height: 28px;
  margin: 0;
`;

export const petTypeIcon = css`
  border: 1px solid;
  width: 63px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0;
  border-radius: 99px;
`;

export const popUpButtonCancelStyle = css`
  background-color: rgba(255, 241, 236, 1);
  font-family: "Satoshi", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: rgba(255, 112, 55, 1);
  font-size: 15px;
  border-radius: 20px;
  text-transform: none;
  transition: background-color 0.3s ease;
  width: 127px;
  height: 48px;

  &:hover {
    color: #ffc9c9;
  }
  padding: 12px 24px 12px 24px;
  border-radius: 99px;
  border: none;
  cursor: pointer;
  gap: 8px;
`;

export const popUpButtonSendStyle = css`
  background-color: rgba(255, 112, 55, 1);
  font-family: "Satoshi", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: white;
  font-size: 15px;
  border-radius: 20px;
  text-transform: none;
  transition: background-color 0.3s ease;
  width: 202px;
  height: 48px;

  &:hover {
    color: #ffc9c9;
  }
  padding: 12px 24px 12px 24px;
  border-radius: 99px;
  border: none;
  cursor: pointer;
  gap: 8px;
`;
export const popUpButtonStyle = css`
  background-color: rgba(255, 112, 55, 1);
  font-family: "Satoshi", sans-serif;
  font-weight: 700;
  font-size: 16px;
  text-align: center;
  color: white;
  font-size: 15px;
  border-radius: 20px;
  text-transform: none;
  transition: background-color 0.3s ease;
  width: 160px;
  height: 48px;

  &:hover {
    color: #ffc9c9;
  }
  padding: 12px 24px 12px 24px;
  border-radius: 99px;
  border: none;
  cursor: pointer;
  gap: 8px;
`;

//section popup petowner
export const petOwnerTopStyle = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  border-bottom: 1px solid rgba(220, 223, 237, 1);
`;

export const ioCloseStyle = css`
  width: 30px;
  height: 30px;
  color: rgba(123, 126, 143, 1);
  margin-top: 5px;
`;

export const petOwnerDetailStyle = css`
  display: flex;
  justify-content: space-between;
  width: 800px;
  padding: 40px;
`;

export const profileDetailStyle = css`
  width: 440px;
  padding: 24px;
  background-color: rgba(250, 250, 251, 1);
  display: flex;
  flex-direction: column;
  gap: 40px;
`;

//popup pet detail
export const petDetailTopStyle = css`
  display: flex;
  width: 100%;
  justify-content: space-between;
  align-items: center;
  padding: 0px 40px;
  border-bottom: 1px solid rgba(220, 223, 237, 1);
`;

export const petDetailStyle = css`
  display: flex;
  justify-content: space-between;
  width: 800px;
  padding: 40px;
`;

export const petProfileGroupStyle = css`
  display: flex;
  flex-direction: column;
  gap: 20px;
`;

export const imagePetStyle = css`
  width: 240px;
  height: 240px;
  border-radius: 999px;
  object-fit: cover;
`;

export const petProfileTextStyle = css`
  font-size: 20px;
  font-weight: 700;
  color: rgba(0, 0, 0, 1);
  margin: 0;
  text-align: center;
`;

export const petProfileDetailStyle = css`
  width: 440px;
  height: 408px;
  padding: 24px;
  background-color: rgba(250, 250, 251, 1);
  display: flex;
  justify-content: space-between;
  gap: 40px;
`;

export const detailGroupLeftStyle = css`
  display: flex;
  flex-direction: column;
  gap: 65px;
`;

export const detailGroupRightStyle = css`
  display: flex;
  flex-direction: column;
  gap: 65px;
`;

//popup reject
export const headGroupStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 16px;
  border-bottom: 1px solid rgba(220, 223, 237, 1);
`;

export const questionTextStyle = css`
  color: rgba(123, 126, 143, 1);
  padding: 0 24px;
`;

export const buttonGroupStyle = css`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 16px;
  margin-top: 24px;
`;

export const ratingTextStyle = css`
  padding: 0 24px;
  text-align: center;
`;

export const ratingContentStyle = css`
  padding: 40px;
`;
// export const
