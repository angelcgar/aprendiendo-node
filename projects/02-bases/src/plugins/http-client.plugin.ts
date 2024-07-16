import axios from "axios";

export const http = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;

    // const resp = await fetch(url);
    // return await resp.json();
  },

  post: async (url?: string, body?: any) => {
    throw new Error("Not implementes");
  },
  put: async (url: string, body: any) => {
    throw new Error("Not implementes");
  },
  delete: async (url: string) => {
    throw new Error("Not implementes");
  },
};
