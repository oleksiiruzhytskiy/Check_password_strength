import { useMemo } from "react";
import { strengthPassword } from "../variable/password_check";

export type Strength = "" | "weak" | "easy" | "medium" | "strong";

export const usePasswordStrength = (password: string): Strength => {
  const { hasLetters, hasDigits, hasSymbols } = strengthPassword(password);
  return useMemo(() => {
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
  }, [password]);
};
