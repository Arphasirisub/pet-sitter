/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Footer from "../../public-components/Footer";
import Navbar from "../../public-components/Navbar";
import SearchBox from "./components/SearchBox.jsx";
import SearchResult from "./components/SearchResult.jsx";

import {
  seachLishContainer,
  containerStyles,
  headingStyles,
  sticky,
  headingContainer,
  // pageContainer,
} from "./components/Style.jsx";

function SearchListPage() {
  return (
    <>
      <Navbar />
      <div className="search-pet-sitter-container" css={containerStyles}>
        <div className="heading-container" css={headingContainer}>
          <div className="heading-styles" css={headingStyles}>
            Search For Pet Sitter
          </div>
        </div>

        <div className="position-sticky" css={sticky}>
          <div className="seach-list-container" css={seachLishContainer}>
            <SearchBox />
            <SearchResult />
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}
export default SearchListPage;
