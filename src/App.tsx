// import './App.css'
import {GreetingPage} from "./pages/greeting-page/greeting-page.tsx";
import {Header} from "@/components/header/header.tsx";

export const App = () => {

  return (
    <>
      <Header />
      <GreetingPage />
    </>
  )
}

