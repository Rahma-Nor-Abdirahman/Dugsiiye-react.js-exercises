import { useState, useEffect } from "react";

const App = () => {
  const [input, setInput] = useState("");
  const [username, setUsername] = useState("");
  const [user, setUser] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!username) return;

    const fetchUser = async () => {
      setLoading(true);
      setError("");
      setUser(null);

      try {
        const res = await fetch(`https://api.github.com/users/${username}`);

        if (!res.ok) {
          throw new Error("Not Found");
        }

        const data = await res.json();
        setUser(data);
      } catch (err) {
        setError("User Not Found ❌");
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, [username]);

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>GitHub User Search</h1>

      <input
        type="text"
        placeholder="Enter username"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        onKeyDown={(e) => e.key === "Enter" && setUsername(input)}
      />

      <button onClick={() => setUsername(input)}>Search</button>

      {loading && <p>Loading...</p>}
      {error && <h3>{error}</h3>}

      {user && (
        <div>
          <img
            src={user.avatar_url}
            alt="avatar"
            width="100"
            style={{ borderRadius: "50%" }}
          />
          <h2>{user.name || user.login}</h2>
          <p>Followers: {user.followers}</p>
          <p>Following: {user.following}</p>
          <a href={user.html_url} target="_blank">
            View Profile
          </a>
        </div>
      )}
    </div>
  );
};

export default App;