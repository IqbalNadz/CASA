import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!email || !password) {
      setError("Please fill in all fields");
      return;
    }

    setError("");

    // Example: send data to API
    console.log("Logging in with:", { email, password });

    // fetch("/api/login", { method: "POST", body: JSON.stringify({ email, password }) })
  };

  return (
    <form onSubmit={handleSubmit} style={{ maxWidth: 300 }}>
      <h2>Login</h2>

      {error && <p style={{ color: "red" }}>{error}</p>}

      <div>
        <label>Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </div>

      <div>
        <label>Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
      </div>

      <button type="submit">Login</button>
    </form>
  );
}

export default LoginForm;

