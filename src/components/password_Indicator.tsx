import React from "react";
import { Strength } from "../hooks/usePasswordStrength";

type Props = {
  strength: Strength;
};

const PasswordStrengthIndicator: React.FC<Props> = ({ strength }) => {
  const strengthClasses = {
    weak: ["weak-password", "weak-password", "weak-password"],
    easy: ["weak-password", "weak-password", ""],
    medium: ["medium-password", "medium-password", ""],
    strong: ["strong-password", "strong-password", "strong-password"],
  };

  return (
    <div className="strength-lines-container">
      {Array.from({ length: 3 }).map((_, index) => {
        const strengthClass = strengthClasses[strength as Exclude<Strength, "">]?.[index];
        return <span key={index} className={`strength-line ${strengthClass || ""}`} />;
      })}
    </div>
  );
};

export default PasswordStrengthIndicator;
