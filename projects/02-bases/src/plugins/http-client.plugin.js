const axios = require("axios");

const http = {
  get: async (url) => {
    const { data } = await axios.get(url);
    return data;

    // const resp = await fetch(url);
    // return await resp.json();
  },

  post: async (url, body) => {},
};

module.exports = {
  http,
};