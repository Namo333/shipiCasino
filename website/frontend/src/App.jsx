import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegistrationPage from "./components/pages/RegistrationPage";
import MainPage from "./components/pages/mainPage";
import LoginPage from "./components/pages/LoginPage";
import ForgotPasswordPage from "./components/pages/ForgotPasswordPage";

const App = () => (
  <div className="">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="login" element={<LoginPage />} />
        <Route path="forgotpassword" element={<ForgotPasswordPage/>} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
