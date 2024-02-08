import { useState } from "react";

export default function SignUpForm({ token, setFunction }) {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);

  async function handleSubmit(event) {
    event.preventDefault();

    try {
      const response = await fetch(
        "https://fsa-jwt-practice.herokuapp.com/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "Application/JSON",
          },

          body: JSON.stringify({ userName: userName, password: password }),
        }
      );

      const result = await response.json();
      setFunction(result.token);
    } catch (err) {
      if (err) {
        setError(err.message);
      }
      console.log(err);
    }
  }

  return (
    <>
      <form onSubmit={handleSubmit}>
        <h1>Please Sign Up</h1>
        {error && <p>{error}</p>}
        <label>
          UserName:
          <input
            name="userName"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </label>

        <label>
          Password:{" "}
          <input
            type="password"
            name="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </label>
        <button type="submit">EnterSite</button>
      </form>
    </>
  );
}
