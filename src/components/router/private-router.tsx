import {BrowserRouter as Router, Navigate, Route, Routes} from "react-router-dom";
import {App} from "@/App.tsx";
import {GreetingPage} from "@/pages/greeting-page/greeting-page.tsx";
import {HomePage} from "@/pages/home-page/home-page.tsx";
import {HistoryPage} from "@/pages/history-page/history-page.tsx";

export const AppRouter = () => {

  return (
    <Router>
      <Routes>
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
          path="/"
          element={<App />}>
          <Route
            path="greeting"
            element={<GreetingPage />}
          />
          <Route
            path="home"
            element={<HomePage />}
          />
          <Route
            path="history"
            element={<HistoryPage />}
          />
        </Route>
      </Routes>
    </Router>
  )

}