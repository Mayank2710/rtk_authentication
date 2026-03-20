import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./features/auth/authSlice";
import { useState } from "react";

function App() {
  const dispatch = useDispatch();

  // ✅ Safe selector (prevents crash)
  const auth = useSelector((state) => state.auth);

  const [name, setName] = useState("");

  // ✅ Handle undefined safely
  if (!auth) {
    return <h1>Loading...</h1>;
  }

  const { user, isLoggedIn } = auth;

  return (
    <div style={{ textAlign: "center", marginTop: "50px" }}>
      <h1>Authentication System</h1>

      {!isLoggedIn ? (
        <>
          <input
            type="text"
            placeholder="Enter name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <br /><br />

          <button onClick={() => dispatch(login({ name }))}>
            Login
          </button>
        </>
      ) : (
        <>
          <h2>Welcome {user?.name}</h2>
          <button onClick={() => dispatch(logout())}>
            Logout
          </button>
        </>
      )}
    </div>
  );
}

export default App;