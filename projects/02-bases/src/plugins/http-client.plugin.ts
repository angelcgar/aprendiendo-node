import axios from "axios";

export const http = {
  get: async (url: string) => {
    const { data } = await axios.get(url);
    return data;

    // const resp = await fetch(url);
    // return await resp.json();
  },

  post: async (url: string, body: any) => {},
};
