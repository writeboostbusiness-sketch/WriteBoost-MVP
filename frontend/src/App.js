import React, { useState } from "react";
import LandingPage from "./components/LandingPage";
import Auth from "./components/Auth";
import Dashboard from "./components/Dashboard";

function App() {
  const [token, setToken] = useState("");
  const [user, setUser] = useState(null);
  const [page, setPage] = useState("landing"); // landing, auth, dashboard

  if(page==="landing") return <LandingPage />;
  if(page==="auth") return <Auth setToken={setToken} setUser={setUser} />;
  if(page==="dashboard") return <Dashboard token={token} user={user} />;
}

export default App;
