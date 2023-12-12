export const getPasswordScore = (password: string): number => {
  const minLength = 6;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;

  let score = 0;

  if (password.length >= minLength) {
    score += 1;
  }

  if (uppercaseRegex.test(password)) {
    score += 1;
  }

  if (lowercaseRegex.test(password)) {
    score += 1;
  }

  if (/[0-9]/.test(password)) {
    score += 1;
  }

  return score;
};

export const isPasswordValid = (password: string): boolean => {
  const minLength = 6;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  // const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  return (
    password.length > minLength &&
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    /[0-9]/.test(password)
  );
};
