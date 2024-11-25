import { useMemo } from "react";

export type Strength = "" | "weak" | "easy" | "medium" | "strong";

export const usePasswordStrength = (password: string): Strength => {
  return useMemo(() => {
    if (!password) return "";
    if (password.length < 8) return "weak";
    
    const hasLetters = /[A-Za-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};:'"\\|,.<>/?`~]/.test(password);

    if (hasLetters && hasDigits && hasSymbols) return "strong";
    if (
      (hasLetters && hasSymbols) ||
      (hasLetters && hasDigits) ||
      (hasDigits && hasSymbols)
    )
      return "medium";
    return "easy";
  }, [password]);
};
