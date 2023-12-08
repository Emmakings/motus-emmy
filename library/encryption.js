import bcrypt from "bcrypt";

const saltRounds = 10;

const HashedPassword = async (userPassword) => {
  const HashedPassword = await bcrypt.hash(userPassword, saltRounds);
  return HashedPassword;
};

const verifyPassword = async (password, hashedPassword) => {
  const isValidPassword = await bcrypt.compare(password, hashedPassword)
  return isValidPassword
};

export { HashedPassword, verifyPassword };
