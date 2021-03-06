import logo from "./logo.svg";
import "./App.css";
import axios from "axios";
import { useState, useEffect } from "react";

function url(path) {
  return process.env.NODE_ENV === "development"
    ? `http://localhost:5000${path}`
    : path;
}
function App() {
  const [data, setData] = useState("");
  useEffect(() => {
    // https://heroku.com/nice-app
    // http://localhost:5000
    fetch(url("/api/data"))
      .then((res) => res.json())
      .then((goods) => setData(goods.data));
  }, []);
  return (
    <div className="App">
      <header className="App-header">{data}</header>
    </div>
  );
}

export default App;
