import React from "react";

function LandingPage() {
  return (
    <div>
      <h1>Welcome to WriteBoost</h1>
      <button onClick={() => window.location.href="/signup"}>Try Free Now</button>
    </div>
  );
}

export default LandingPage;
