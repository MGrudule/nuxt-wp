<template>
  <div>
    <section class="container">
    <div>
      <h1 class="title" v-if="post.title" v-text="post.title.rendered"/>
      <span v-if="post.content" v-html="post.content.rendered"></span>
    </div>
    </section>
  </div>
</template>
<script>
import axios from 'axios'
export default {
  head () {
    return {
      title: this.post.title.rendered,
      meta: [
        { hid: 'description', id: 'description', name: 'description', content: this.post._yoast_wpseo_metadesc }
      ]
    }
  },
  asyncData ({ params }) {
    return axios.get(`${process.env.wpUrl}/posts?slug=${params.slug}`)
      .then(response => {
        return { post: response.data[0] }
      })
      .catch((error) => {
        return { error: error }
      })
  },
  data () {
    return {
      post: {},
      error: []
    }
  }
}
</script>
