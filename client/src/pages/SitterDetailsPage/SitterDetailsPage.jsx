import PetSitterReview from "./components/Pet-Sitter-Review";
import PetSitterDetail from "./components/Pet-Sitter-Detail";
import Carousel from "./components/Pet-Sitter-Image-Carousel";
import Navbar from "../../public-components/Navbar";
import Footer from "../../public-components/Footer";
import { Stack } from "@mui/system";

function SitterDetailsPage() {
  return (
    <>
      <Stack width={"100%"}>
        <Navbar />
        <Stack width={"100%"} alignItems={"center"} justifyContent={"center"}>
          <Carousel />
          <PetSitterDetail />
          <PetSitterReview />
        </Stack>
        <Footer />
      </Stack>
    </>
  );
}
export default SitterDetailsPage;
