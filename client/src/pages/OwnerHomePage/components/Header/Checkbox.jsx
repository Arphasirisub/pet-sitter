/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { text, checkBoxStyle, checkboxStyles } from "./HeaderStyle";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import { useSitter } from "../../../../contexts/getSitters";

function BargroupCheckbox() {
  const { searchInput, handleStateChange } = useSitter();
  return (
    <div className="bargroup_checkbox" css={checkBoxStyle}>
      <span css={text}>Pet Type: </span>
      <FormControlLabel
        control={
          <Checkbox
            id="animalcategory1"
            name="animalcategory1"
            value={searchInput.dog}
            sx={checkboxStyles}
            onChange={(e) => {
              handleStateChange("dog", e.target.checked);
            }}
          />
        }
        label="Dog"
      />

      <FormControlLabel
        control={
          <Checkbox
            id="animalcategory2"
            name="animalcategory2"
            value={searchInput.cat}
            sx={checkboxStyles}
            onChange={(e) => {
              handleStateChange("cat", e.target.checked);
            }}
          />
        }
        label="Cat"
      />
      <FormControlLabel
        control={
          <Checkbox
            id="animalcategory3"
            name="animalcategory3"
            value={searchInput.bird}
            sx={checkboxStyles}
            onChange={(e) => {
              handleStateChange("bird", e.target.checked);
            }}
          />
        }
        label="Bird"
      />
      <FormControlLabel
        control={
          <Checkbox
            id="animalcategory4"
            name="animalcategory4"
            value={searchInput.rabbit}
            sx={checkboxStyles}
            onChange={(e) => {
              handleStateChange("rabbit", e.target.checked);
            }}
          />
        }
        label="Rabbit"
      />
    </div>
  );
}

export default BargroupCheckbox;
