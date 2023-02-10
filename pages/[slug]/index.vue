<script setup>
// envファイルにある内容を変数に格納
const config = useRuntimeConfig();

// URL情報を取得
const route = useRoute();
// URLから記事IDを取得
const slug = route.params.slug;

// データを取得
// asyncがないのが不思議
const { data: article } = await useFetch(`/blog/${slug}`, {
  baseURL: config.baseURL,
  headers: {
    "X-MICROCMS-API-KEY": config.apiKey,
  },
});
</script>


<template>
  <main class="main">
    <p><NuxtLink to="/">Home</NuxtLink> <NuxtLink to="/about">About</NuxtLink></p>
    <h1 class="title">{{ article.title }}</h1>
    <p class="publishedAt">
      <time :datetime="article.publishedAt" v-text="article.publishedAt" />
    </p>
    <div class="post" v-html="article.body" />
  </main>
</template>

<style lang="scss" scoped>
.main {
  width: 960px;
  margin: 0 auto;
}

.title {
  margin-bottom: 20px;
}

.publishedAt {
  margin-bottom: 40px;
}

:deep(.post) {
  > h2 {
    font-size: 24px;
    font-weight: bold;
    margin: 40px 0 16px;
    border-bottom: 1px solid #ddd;
  }


  > p {
    line-height: 1.8;
    letter-spacing: 0.2px;
  }
}
</style>