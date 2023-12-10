export const isPasswordValid = (password: string): boolean => {
  const minLength = 8;
  const uppercaseRegex = /[A-Z]/;
  const lowercaseRegex = /[a-z]/;
  const specialCharRegex = /[!@#$%^&*(),.?":{}|<>]/;

  return (
    password.length > minLength &&
    uppercaseRegex.test(password) &&
    lowercaseRegex.test(password) &&
    (/[0-9]/.test(password) || specialCharRegex.test(password))
  );
};
