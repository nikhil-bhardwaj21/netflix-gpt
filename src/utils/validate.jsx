export const checkValidData = (email, password) => {
  const isEmailValid = /^[a-zA-Z0-9_.±]+@[a-zA-Z0-9-]+.[a-zA-Z0-9-.]+$/.test(
    email
  ); //return True / False
  const isPasswordValid =
    /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(
      password
    ); //return True / False

  if (!isEmailValid) return "Email is not valid";
  if (!isPasswordValid)
    return "Password is not valid Or must be 8-16 character";

  return null;
};
