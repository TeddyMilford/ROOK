import "./App.css";

import React from "react";
import { useEffect, useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
// import BoardStack from "./BoardStack";
import Board from "./Board";
import Favorites from "./Favorites";
import LandingPage from "./LandingPage";
import LoginForm from "./LoginForm";
// import LoginForm from "./LoginForm";

function App() {
  const [user, setUser] = useState(null);

  useEffect(() => {
    fetch("http://localhost:3000/me", {
      method: "GET",
      credentials: "include",
    })
      .then((res) => res.json())
      .then((data) => {
        if (!data.error) {
          setUser(data);
          console.log(data);
        }
      });
  }, []);

  if (!user) return <LoginForm setUser={setUser} />;

  return (
    <div style={{ backgroundColor: "#F1E3F3" }}>
      {/* <Routes>
        <Route path="/landing" element={<LandingPage />} />
        <Route path="/favorites" element={<Favorites />} />
        <Route path="*" element={<Navigate to="/landing" replace />} />
      </Routes> */}
      <img
        src="https://i.insider.com/5b7ebf372be4abc6518b521b?width=700"
        alt="Tommy Boy"
      ></img>
    </div>
  );
}

export default App;

// fetch()
//   .then((response) => response.json())
//   .then((data) => console.log(data));

// fetch("", {
//   method: "POST",
//   headers: { "Content-Type": "application/json" },
//   body: JSON.stringify(data),
// })
//   .then((response) => response.json())
//   .then((data) => {
//     console.log("Success:", data);
//   });
