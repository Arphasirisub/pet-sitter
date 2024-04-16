/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { useState } from "react";
import CircularProgress from "@mui/material/CircularProgress";
import Backdrop from "@mui/material/Backdrop";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Fade from "@mui/material/Fade";
import Button from "@mui/material/Button";

import { useAuth } from "../../../contexts/authentication";
import { Select, MenuItem, FormControl, InputLabel } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { useAlternativeLogin } from "../../../contexts/alternativeLogin";

function NewUserModal() {
  const navigate = useNavigate();
  const [forgetEmail, setForgetEmail] = useState("");
  const { state, setState } = useAuth();
  const { isNewUser, setIsNewUser, userData, setUserData, updateUser } =
    useAlternativeLogin();

  const handleSubmit = async (event) => {
    event.preventDefault();
    updateUser(userData);
    setIsNewUser(false);
  };

  return (
    <Modal
      aria-labelledby="transition-modal-title"
      aria-describedby="transition-modal-description"
      open={isNewUser}
      onClose={() => {
        setIsNewUser(false);
        navigate("/login");
      }}
      closeAfterTransition
      slots={{ backdrop: Backdrop }}
      slotProps={{
        backdrop: {
          timeout: 500,
        },
      }}
    >
      <Fade in={isNewUser}>
        <Box
          css={css`
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 500px;
            background-color: white;
            box-shadow: 24px;
            padding: 16px;
            display: flex;
            justify-content: center;
            align-items: center;
            flex-direction: column;
            border-radius: 20px;
            padding-top: 35px;
            gap: 2rem;
          `}
          sx={{ minHeight: 150 }}
        >
          <div
            css={css`
              font-size: 24px;
              font-weight: bold;
            `}
          >
            You are new user, Please select role
          </div>
          {/* email form */}

          <form
            variant="outlined"
            css={css`
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-evenly;
            `}
            onSubmit={handleSubmit}
          >
            <InputLabel id="role-label">Select Role</InputLabel>
            <Select
              labelId="role-label"
              id="role"
              label="Role"
              name="role"
              value={userData.role}
              onChange={(event) => {
                setUserData({ ...userData, role: event.target.value });
              }}
              css={css`
                width: 250px;
              `}
            >
              <MenuItem value="" disabled>
                Select Role
              </MenuItem>
              <MenuItem value="pet_owner">Pet Owner</MenuItem>
              <MenuItem value="pet_sitter">Pet Sitter</MenuItem>
            </Select>
            <Button type="submit">Confirm</Button>
          </form>

          <Button
            onClick={() => {
              setIsNewUser(false);
              navigate("/login");
            }}
          >
            Close
          </Button>
        </Box>
      </Fade>
    </Modal>
  );
}

export default NewUserModal;
