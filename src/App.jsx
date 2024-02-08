import { useState } from "react";
import Authenticate from "./components/AuthenticationForm";
import SignUpForm from "./components/SignUpForm";

function App() {
  const [token, setToken] = useState("");
  console.log(token);
  return (
    <>
      <SignUpForm token={token} setFunction={setToken} />
      <Authenticate token={token} setFunction={setToken} />
    </>
  );
}

export default App;
