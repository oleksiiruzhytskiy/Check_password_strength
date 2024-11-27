import React from "react";
import { Strength } from "../hooks/usePasswordStrength";
import { strengthClasses } from "../variable/password_check";

type Props = {
  strength: Strength;
};

const PasswordStrengthIndicator: React.FC<Props> = ({ strength }) => {

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
