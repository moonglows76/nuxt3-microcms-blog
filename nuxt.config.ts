// https://nuxt.com/docs/api/configuration/nuxt-config
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  runtimeConfig: {
    public: {
      baseURL: BASE_URL,
      apiKey: API_KEY,
    },
  },
});
