/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import {
  inputContainer,
  headingStyle,
  addressDetailInput,
  labelTitle,
  inputLayout,
  input,
  rowLayout,
} from "../Style/AddressInfoStyle";
import { useSitter } from "../../../../contexts/getSitters";
import { useEffect, useState } from "react";
import GoogleMapReact from "google-map-react";

function AddressInfo() {
  const {
    getSitterInfo,
    getSitterData,
    address,
    setAddress,
    district,
    setDistrict,
    subDistrict,
    setSubDistrict,
    province,
    setProvince,
    postCode,
    setPostCode,
    pin,
    setPin,
  } = useSitter();

  const handleMapClick = ({ lat, lng }) => {
    setPin({ lat, lng });
  };

  const PinMarker = ({ lat, lng }) => (
    <div
      style={{
        color: "red",
        fontSize: "20px",
        fontWeight: "bold",
        cursor: "pointer",
        userSelect: "none", // Prevent text selection while dragging
      }}
    >
      📍
    </div>
  );

  function getReverseGeocoding(lat, lng, apiKey) {
    const apiUrl = `https://maps.googleapis.com/maps/api/geocode/json?latlng=${lat},${lng}&key=${apiKey}`;

    return fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        if (data.status === "OK" && data.results.length > 0) {
          return data.results[0].formatted_address;
        } else {
          throw new Error("Reverse geocoding failed");
        }
      })
      .catch((error) => {
        console.error("Error during reverse geocoding:", error);
        return null;
      });
  }

  const latitude = pin?.lat;
  const longitude = pin?.lng;
  const apiKey = "AIzaSyDJp7031NF7XEEat_1FsDy96vEsk0colb4";

  getReverseGeocoding(latitude, longitude, apiKey).then((address) => {
    setAddress(address);
    console.log("Reverse geocoded address:", address);
  });

  return (
    <>
      <div css={inputContainer}>
        <p css={headingStyle}>Address</p>
        <div style={{ height: "400px", width: "100%" }}>
          <GoogleMapReact
            bootstrapURLKeys={{
              key: "AIzaSyDJp7031NF7XEEat_1FsDy96vEsk0colb4",
            }}
            defaultCenter={{ lat: 0, lng: 0 }}
            defaultZoom={3}
            onClick={handleMapClick}
          >
            <PinMarker lat={pin?.lat} lng={pin?.lng} />
          </GoogleMapReact>
        </div>
        <label htmlFor="address" css={labelTitle}>
          Location
        </label>
        <input
          css={addressDetailInput}
          required
          value={`${pin?.lat}, ${pin?.lng}`}
        />
        <label htmlFor="address" css={labelTitle}>
          Address detail*
        </label>
        <input
          css={addressDetailInput}
          required
          onChange={(e) => {
            setAddress(e.target.value);
          }}
          value={address}
        />
        <div css={rowLayout}>
          <div css={inputLayout}>
            <label htmlFor="district">District*</label>
            <input
              type="text"
              id="district"
              name="district"
              css={input}
              required
              onChange={(e) => {
                setDistrict(e.target.value);
              }}
              value={district}
            />
          </div>
          <div css={inputLayout}>
            <label htmlFor="sub-district">Sub-district*</label>
            <input
              type="text"
              id="sub-district"
              name="sub-district"
              css={input}
              required
              onChange={(e) => {
                setSubDistrict(e.target.value);
              }}
              value={subDistrict}
            />
          </div>
        </div>
        <div css={rowLayout}>
          <div css={inputLayout}>
            <label htmlFor="province">Province*</label>
            <input
              type="text"
              id="province"
              name="province"
              css={input}
              required
              onChange={(e) => {
                setProvince(e.target.value);
              }}
              value={province}
            />
          </div>
          <div css={inputLayout}>
            <label htmlFor="post-code">Post code*</label>
            <input
              type="text"
              id="post-code"
              name="post-code"
              pattern="[0-9]{5}"
              css={input}
              required
              onChange={(e) => {
                setPostCode(e.target.value);
              }}
              value={postCode}
            />
          </div>
        </div>
      </div>
    </>
  );
}

export default AddressInfo;
