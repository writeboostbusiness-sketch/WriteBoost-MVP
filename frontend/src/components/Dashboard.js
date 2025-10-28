import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard({ token, user }) {
  const [contentType, setContentType] = useState("socialmedia");
  const [keywords, setKeywords] = useState("");
  const [output, setOutput] = useState("");
  const [history, setHistory] = useState([]);

  useEffect(()=>{ fetchHistory(); }, []);

  const fetchHistory = async () => {
    const res = await axios.get("https://your-backend.com/history", { headers:{ Authorization:`Bearer ${token}` } });
    setHistory(res.data.history.map(item=>item.ai_output));
  };

  const generateContent = async () => {
    const res = await axios.post(
      "https://your-backend.com/generate",
      { contentType, keywords, tone:"Friendly", length:"Short", language:"English", goal:"Engagement", brand:"Brand" },
      { headers:{ Authorization:`Bearer ${token}` } }
    );
    setOutput(res.data.output);
    setHistory([res.data.output, ...history]);
  };

  const exportText = () => {
    const element = document.createElement("a");
    const file = new Blob([output], { type: "text/plain" });
    element.href = URL.createObjectURL(file);
    element.download = "ai_content.txt";
    element.click();
  };

  return (
    <div>
      <h2>Welcome, {user.name}</h2>
      <input placeholder="Keywords" value={keywords} onChange={e=>setKeywords(e.target.value)} />
      <button onClick={generateContent}>Generate</button>
      <button onClick={exportText}>Export</button>
      <div><h3>Output:</h3>{output}</div>
      <div><h3>History:</h3>{history.map((o,i)=><div key={i}>{o}</div>)}</div>
    </div>
  );
}

export default Dashboard;
