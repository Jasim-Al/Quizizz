import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import Count from "./pages/Count";
import QuizPage from "./pages/QuizPage";
import ScoreBoard from "./pages/ScoreBoard/ScoreBoard";
import { ScoreProvider } from "./shared/context/scoreContext";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<App />}>
      <Route index element={<Count />} />
      <Route path="/quiz/:index" element={<QuizPage />}></Route>
      <Route path="/score" element={<ScoreBoard />} />
    </Route>
  )
);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ScoreProvider>
      <RouterProvider router={router} />
    </ScoreProvider>
  </React.StrictMode>
);
