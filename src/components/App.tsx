import "./App.scss";
import { useState } from "react";
import PasswordStrengthIndicator from "./password_Indicator";
import { usePasswordStrength } from "../hooks/usePasswordStrength";

function App() {
  const [password, setPassword] = useState("");
  const passwordStrength = usePasswordStrength(password);

  return (
    <div className="field">
      <div className="form-group">
        <label htmlFor="password">Check password strength: </label>
        <input
          type="password"
          name="password"
          placeholder="Enter password"
          onChange={(e) => setPassword(e.target.value)}
        />
      </div>
      <PasswordStrengthIndicator strength={passwordStrength} />
    </div>
  );
}

export default App;
