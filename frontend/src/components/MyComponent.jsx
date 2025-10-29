import React, { useEffect } from "react";
import { fetchData } from "../api/api";

function MyComponent() {
  useEffect(() => {
    fetchData("some-endpoint").then(data => {
      console.log(data);
    });
  }, []);
  
  return <div>Check console for API data</div>;
}

export default MyComponent;
