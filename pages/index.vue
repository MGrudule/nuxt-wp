<template>
  <div class="bg-light" style="min-height: 100vh">
    <nuxt-link
      to="/post"
      class="before-bg bg-secondary position-absolute text-light d-flex align-items-center pl-3"
      style="right: 0; min-width: 3rem; height: 100%; transform: translate3d(0)"
    >
      🌕
    </nuxt-link>
    <div class="container pt-5">
      <div>
        <Logo />
        <h1 class="title">nuxt-wp</h1>
        <div class="my-5">
          <h2 class="display-3">{{ page.title }}</h2>
          <nuxt-content :document="page" />
        </div>
        <div class="my-5">
          <h2 class="display-3">Events</h2>
          <a
            v-for="event in events"
            :key="event.slug"
            :href="`/events/${event.slug}`"
            v-html="event.title"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  transition: 'forward',
  async asyncData({ $content, $strapi }) {
    const page = await $content('hello').fetch()
    const events = await $strapi.$events.find()
    return {
      page,
      events,
    }
  },
}
</script>