<script setup>
// マウスの座標を取得
const { x, y } = useMouse()

// envファイルにある内容を変数に格納
const config = useRuntimeConfig();

// データを取得
// asyncがないのが不思議
const { data } = await useFetch("/blog", {
  baseURL: config.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});
</script>

<template>
  <div>
    <h1>Hello, Nuxt3!</h1>
    <p><NuxtLink to="/">Home</NuxtLink> <NuxtLink to="/about">About</NuxtLink></p>
    <ul>
      <li v-for="article in data.contents" :key="article.id">
        <nuxt-link :to="`/${article.id}`">{{ article.title }}</nuxt-link>
      </li>
    </ul>
    Mouse position is at: {{ x }}, {{ y }}
  </div>
</template>