import bcrypt from "bcrypt";

const saltRounds = 10;

const HashedPassword = async (userPassword) => {
  const HashedPassword = await bcrypt.hash(userPassword, saltRounds);
  return HashedPassword;
};

const UnHashedPassword = () => {};

export { HashedPassword, UnHashedPassword };
