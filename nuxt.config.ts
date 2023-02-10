// https://nuxt.com/docs/api/configuration/nuxt-config
const { BASE_URL, API_KEY } = process.env;

export default defineNuxtConfig({
  runtimeConfig: {
    apiKey: API_KEY,
    public: {
      baseURL: BASE_URL,
      apiKey: process.env.NODE_ENV !== 'production' ? API_KEY : undefined,
    },
  },
});
