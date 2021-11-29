import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "./pages/Login/LoginPage.js";
import RegisterPage from "./pages/Registration/RegisterPage.js";
import GamingCompanyPage from "./pages/GamingCompany/GamingCompanyPage.js";
import GamingCompanyStorePage from "./pages/GamingCompany/GamingCompanyStorePage.js";
import MyGamesPage from "./pages/GamingCompany/MyGamesPage.js";
import "./App.css";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />}></Route>
          <Route path="/register" element={<RegisterPage />}></Route>
          <Route path="/gamingCompany" element={<GamingCompanyPage />}>
            <Route index element={<GamingCompanyStorePage />} />
            <Route path="myGames" element={<MyGamesPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
