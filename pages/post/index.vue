<template>
  <div class="text-light bg-secondary" style="min-height: 100vh">
    <nuxt-link
      to="/"
      class="before-bg bg-white position-absolute text-dark d-flex align-items-center justify-content-center"
      style="left: 0; min-width: 3rem; height: 100%"
    >
      ☀️
    </nuxt-link>

    <div class="container pt-5">
      <h1 class="title">Posts</h1>

      <div v-if="posts && posts.length > 0" class="row">
        <!-- <NuxtLink
          v-for="post in posts"
          :key="post.id"
          :to="`/post/${post.slug}`"
          class="list-group-item list-group-item-action"
          v-text="post.title.rendered"
        /> -->
        <card-flip
          class="col-12 col-md-6 col-lg-4 mb-4"
          v-for="post in posts"
          :card="post"
          :key="post.id"
        ></card-flip>
      </div>

      <div v-if="!api" v-text="warning" />
    </div>
  </div>
</template>

<script>
import axios from 'axios'
import CardFlip from '~/components/CardFlip.vue'
export default {
  components: { CardFlip },
  transition: 'back',
  head() {
    return {
      title: 'Posts page',
    }
  },
  asyncData() {
    if (process.env.wpUrl) {
      return axios
        .get(`${process.env.wpUrl}/posts/`)
        .then((response) => {
          return { posts: response.data }
        })
        .catch((error) => {
          return { error: error }
        })
    } else {
      return {
        api: false,
      }
    }
  },
  data() {
    return {
      warning: 'No Wordpress api url',
      api: true,
      posts: {},
      error: [],
    }
  },
}
</script>

