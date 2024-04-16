import { Route, Routes } from "react-router-dom";

import LoginPage from "./pages/LoginPage/Loginpage";
import RegisterPage from "./pages/RegisterPage/Registerpage";
import SearchListPage from "./pages/SearchListPage/SearchListPage";
import OwnerHomePage from "./pages/OwnerHomePage/OwnerHomePage";
import SitterDetailsPage from "./pages/SitterDetailsPage/SitterDetailsPage";
import ForgetPasswordPage from "./pages/ForgetPasswordPage/ForgetPasswordPage.Jsx";
import SitterHomepage from "./pages/SitterHomePage/SitterHomepage";

function SitterApp() {
  return (
    <Routes>
      <Route path="/sitter/:id/:activeTaps/" element={<SitterHomepage />} />
      <Route
        path="/sitter/:id/:activeTaps/:bookingId"
        element={<SitterHomepage />}
      />

      <Route path="/login" element={<OwnerHomePage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="/" element={<OwnerHomePage />} />
      <Route path="/list" element={<SearchListPage />} />
      <Route path="/detail/:id" element={<SitterDetailsPage />} />
      <Route path="/owner/:id/:activeTaps/" element={<OwnerHomePage />} />
      <Route
        path="/owner/:id/:activeTaps/:subTaps"
        element={<OwnerHomePage />}
      />
      <Route
        path="/owner/:id/:activeTaps/:subTaps/:petId"
        element={<OwnerHomePage />}
      />
      <Route path="/booking/:start/:end/:id" element={<OwnerHomePage />} />
      <Route
        path="/booking/result/:bookingId/:id"
        element={<OwnerHomePage />}
      />
      <Route path="/sitter/:id" element={<SitterHomepage />} />
    </Routes>
  );
}

export default SitterApp;
