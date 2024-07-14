const getAgePlugin = require("get-age");

export const getAge = (birthday: string) => {
  if (!birthday) return new Error("birthday is required");

  return getAgePlugin(birthday);
};
