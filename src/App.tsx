// import './App.css'
import {Header} from "@/components/header/header.tsx";
import {Navigate, Route, Routes, useLocation, useNavigate} from "react-router-dom";
import {FooterSlide} from "@/components/greeting/footer-slide/footer-slide.tsx";
import {GreetingPage} from "@/pages/greeting-page/greeting-page.tsx";
import {HomePage} from "@/pages/home-page/home-page.tsx";
import {HistoryPage} from "@/pages/history-page/history-page.tsx";
import {Modal} from "@/components/modal/modal.tsx";
import {Transfer} from "@/components/transfer/transfer.tsx";

export const App = () => {

  const location = useLocation();
  const background = location.state && location.state.background;
  const navigate = useNavigate();

  return (
    <>
      <Header />
        <Routes location={background || location}>
          <Route
            path="/"
            element={
              <Navigate
                to="/home"
                replace
              />
            }
          />
            <Route
              path="/greeting"
              element={<GreetingPage />}
            />
            <Route
              path="/home"
              element={<HomePage />}
            />
            <Route
              path="/history"
              element={<HistoryPage />}
            />
        </Routes>
      {background && (
        <Routes>
          <Route path="/home/transfer" element={
            <Modal header="Перевести" onClose={() => navigate(-1)}>
              <Transfer />
            </Modal>}
          />
        </Routes>
      )}
      <FooterSlide />
    </>
  )
}

