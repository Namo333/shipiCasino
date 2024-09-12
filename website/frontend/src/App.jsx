import { BrowserRouter, Routes, Route } from "react-router-dom";

import RegistrationPage from "./components/pages/RegistrationPage";
import MainPage from "./components/pages/mainPage";
import LoginPage from "./components/pages/LoginPage";

const App = () => (
  <div className="">
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />
        <Route path="registration" element={<RegistrationPage />} />
        <Route path="test2" element={<MainPage />} />
      </Routes>
    </BrowserRouter>
  </div>
);

export default App;
