import { useState } from "react";

function AdminLogin({ onAdminLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleLogin(e) {
    e.preventDefault();

    const cleanUsername = username.trim();

    if (!cleanUsername || !password) {
      setError("Please fill in all fields.");
      return;
    }

    try {
      setLoading(true);
      setError("");

      const response = await fetch(
        "http://localhost:3001/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            username: cleanUsername,
            password
          })
        }
      );

      const data = await response.json();

      if (!response.ok) {
        setError(data.message || "Invalid username or password.");
        return;
      }

      // Save JWT token
      localStorage.setItem("adminToken", data.token);

      onAdminLogin();

    } catch (error) {
      setError("Unable to connect to server.");
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="login-overlay">

      <div className="login-modal">

        <h2>🔐 Admin Login</h2>

        <p>
          Login to ShopSphere Admin Panel
        </p>

        <form onSubmit={handleLogin}>

          <label>
            Admin Username
          </label>

          <input
            type="text"
            placeholder="Enter admin username"
            value={username}
            onChange={(e) => {
              setUsername(e.target.value);
              setError("");
            }}
          />

          <label>
            Admin Password
          </label>

          <input
            type="password"
            placeholder="Enter admin password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              setError("");
            }}
          />

          {error && (
            <p className="login-error">
              ⚠️ {error}
            </p>
          )}

          <button
            type="submit"
            className="login-submit"
            disabled={loading}
          >
            {loading ? "Logging in..." : "🔐 Admin Login"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default AdminLogin;