// import getAgePlugin from "get-age";

export const getAge = (birthday: string) => {
  if (!birthday) return new Error("birthday is required");

  // console.log({ currentYear: new Date().getFullYear() });

  return new Date().getFullYear() - new Date(birthday).getFullYear();
};
