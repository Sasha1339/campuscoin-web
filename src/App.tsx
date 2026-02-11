// import './App.css'
import {Header} from "@/components/header/header.tsx";
import {Outlet} from "react-router-dom";
import {FooterSlide} from "@/components/greeting/footer-slide/footer-slide.tsx";

export const App = () => {

  return (
    <>
      <Header />
      <Outlet />
      <FooterSlide />
    </>
  )
}

