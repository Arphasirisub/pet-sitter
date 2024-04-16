/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination, Navigation } from "swiper/modules";
import Stack from "@mui/material/Stack";
import { useParams } from "react-router-dom";
import { useEffect } from "react";
import { CircularProgress } from "@mui/material";
import { useBookingTools } from "../../../contexts/BookingTools";

function Carousel() {
  const param = useParams();
  const { getSitterData, sitterData } = useBookingTools();

  useEffect(() => {
    getSitterData(param.id);
  }, []);

  return (
    <>
      <Swiper
        slidesPerView={3}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Pagination, Navigation]}
        className="mySwiper"
        css={css`
          width: 1280px;
        `}
      >
        {sitterData.image_gallery?.map((item, index) => (
          <SwiperSlide key={index}>
            <Stack className="comment-reviewer" width="80%" spacing={2}>
              <img
                alt={`image_gallery_${index}`}
                src={item}
                height="240px"
                width="415px"
                css={css`
                  object-fit: cover;
                  margin: auto;
                `}
              />
            </Stack>
          </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

export default Carousel;
