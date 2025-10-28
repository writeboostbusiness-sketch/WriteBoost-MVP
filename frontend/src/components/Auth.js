import React, { useState } from "react";
import axios from "axios";

function Auth({ setToken, setUser }) {
  const [page, setPage] = useState("login");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const signup = async () => {
    await axios.post("https://your-backend.com/signup", { name, email, password });
    alert("Signup success! Login now.");
    setPage("login");
  };

  const login = async () => {
    const res = await axios.post("https://your-backend.com/login", { email, password });
    setToken(res.data.token);
    setUser(res.data.user);
  };

  return (
    <div>
      {page === "login" ? (
        <>
          <h2>Login</h2>
          <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button onClick={login}>Login</button>
          <p onClick={()=>setPage("signup")}>Sign up instead</p>
        </>
      ) : (
        <>
          <h2>Signup</h2>
          <input placeholder="Name" value={name} onChange={e=>setName(e.target.value)} />
          <input placeholder="Email" value={email} onChange={e=>setEmail(e.target.value)} />
          <input placeholder="Password" type="password" value={password} onChange={e=>setPassword(e.target.value)} />
          <button onClick={signup}>Sign Up</button>
          <p onClick={()=>setPage("login")}>Login instead</p>
        </>
      )}
    </div>
  );
}

export default Auth;
