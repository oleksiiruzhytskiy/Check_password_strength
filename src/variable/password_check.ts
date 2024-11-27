export const strengthClasses = {
    weak: ["weak-password", "weak-password", "weak-password"],
    easy: ["weak-password", "weak-password", ""],
    medium: ["medium-password", "medium-password", ""],
    strong: ["strong-password", "strong-password", "strong-password"],
  };
  
  export const strengthPassword = (password: string) => {
    const hasLetters = /[A-Za-z]/.test(password);
    const hasDigits = /\d/.test(password);
    const hasSymbols = /[!@#$%^&*()_+\-=\[\]{};:'"\\|,.<>/?`~]/.test(password);

    return {
        hasLetters,
        hasDigits,
        hasSymbols,
    };
};
