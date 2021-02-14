<template>
  <div>
    <section class="container my-5">
      <div>
        <img
          v-if="event.cover"
          :src="$strapi.options.url + event.cover.formats.small.url"
          class="mb-2 img-fluid"
        />
        <h1 v-if="event.title" v-text="event.title" class="display-1" />
        <div
          v-if="event.description"
          v-html="$md.render(event.description)"
        ></div>
      </div>
    </section>
  </div>
</template>
<script>
export default {
  transition: 'forward',
  async asyncData({ $strapi, params }) {
    const events = await $strapi.$events.find({ slug: params.slug })
    const event = events[0]
    return {
      event,
    }
  },
}
</script>