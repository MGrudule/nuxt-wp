<template>
  <div class="bg-light" style="min-height:100vh">
    <nuxt-link to="/post" class="bg-secondary position-absolute text-light" style="right:0; width:3rem; height:100%;"> hello</nuxt-link>
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
  transition: 'forward',
  async asyncData ({ $content }) {
    const page = await $content('hello').fetch()

    return {
      page
    }
  }
}
</script>