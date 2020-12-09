<template>
  <div>
    <div class="container">
    <div>
      <Logo />
      <h1 class="title">
        nuxt-wp
      </h1>
      <div class="my-5">
        <h2 class="display-3">{{page.title}}</h2>
        <nuxt-content :document="page" />
      </div>
    </div>
    </div>
  </div>
</template>

<script>
export default {
  async asyncData ({ $content }) {
    const page = await $content('hello').fetch()

    return {
      page
    }
  }
}
</script>