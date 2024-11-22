import "./App.css";
import React, { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const hasLetters = /[A-Za-z]/.test(password);
  const hasDigits = /\d/.test(password);
  const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};:'"\\|,.<>/?`~]/.test(password);

  const getPasswordStrength = () => {
    if (!password) return "";
    if (password.length < 8) return "weak";
    if (hasLetters && hasDigits && hasSymbols) return "strong";
    if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasDigits) ||
      (hasDigits && hasSymbols)
    )
      return "medium";
    return "easy";
  };

  const setStrengthPassword = getPasswordStrength();

  const createStrengthElement = (amount, setStrengthPassword) => {
    const strengthClasses = {
      weak: ["weak-password", "weak-password", "weak-password"],
      easy: ["weak-password", "weak-password", ""],
      medium: ["medium-password", "medium-password", ""],
      strong: ["strong-password", "strong-password", "strong-password"],
    };

    return Array.from({ length: amount }).map((_, index) => {
      const strengthClass = strengthClasses[setStrengthPassword]?.[index] || "";
      return <span key={index} className={`strength-line ${strengthClass}`} />;
    });
  };

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
      <div className="strength-lines-container">
        {createStrengthElement(3, setStrengthPassword)}
      </div>
    </div>
  );
}

export default App;
