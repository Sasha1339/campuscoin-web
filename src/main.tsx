import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'

import { Navigate, Route, Routes } from 'react-router-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import {App} from "./App.tsx";
import {GreetingPage} from "@/pages/greeting-page/greeting-page.tsx";
import {HomePage} from "@/pages/home-page/home-page.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
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
        </Route>
      </Routes>
    </Router>
  </StrictMode>,
)
