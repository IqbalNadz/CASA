import { useState } from "react";
import Logo from "./assets/CASA-01.png";
import Footer from "./components/Footer.jsx";
import "./App.css";
import "./index.css";

function App() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const res = await fetch("/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          username,
          password,
        }),
      });

      const data = await res.json();

      if (!res.ok) {
        alert(data.message);
        return;
      }

      alert("Login successful");
      console.log(data);

    } catch (err) {
      console.error(err);
      alert("Cannot connect to server");
    }
  };

  return (
    <center>
      <div>
        <img src={Logo} alt="logo" className="logo" />
        <br /><br /><br /><br />

        <label className="content" style={{ display: "inline-block" }}>
          Username:
        </label>
        <input
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          style={{
            marginRight: "50px",
            borderRadius: "5px",
            width: "300px",
            padding: "8px",
            marginTop: "-15px",
            verticalAlign: "middle",
          }}
        />

        <br /><br />

        <label className="content" style={{ display: "inline-block" }}>
          Password :
        </label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={{
            marginRight: "50px",
            borderRadius: "5px",
            width: "300px",
            padding: "8px",
            marginTop: "-15px",
            verticalAlign: "middle",
          }}
        />

        <br />

        <label className="remember">
          <input
            type="checkbox"
            style={{ display: "inline-block", width: "25px" }}
          />
          Remember Me
        </label>

        <br />

        <button className="button" onClick={handleLogin}>
          Login
        </button>

        <Footer />
      </div>
    </center>
  );
}

export default App;
