<template>
  <div class="container">
    <div>
      <h1 class="title">Posts</h1>
      <div v-if="posts && posts.length > 0" class="list-group" >
          <NuxtLink v-for="post in posts" :key="post.id" :to="`/post/${post.slug}`" class="list-group-item list-group-item-action"  v-text="post.title.rendered"/>
      </div>
      <div v-if="!api" v-text="warning"/>
    </div>
  </div>
</template>

<script>
import axios from 'axios'
export default {
    head () {
    return {
      title: "Posts page",
    }
  },
  asyncData () {
    if(process.env.wpUrl){
      return axios.get(`${process.env.wpUrl}/posts/`)
      .then(response => {
        return { posts: response.data }
      })
      .catch((error) => {
        return { error: error }
      })
    } else {
      return {
        api: false
      }
    }
   
  },
  data () {
    return {
      warning: "No Wordpress api url",
      api: true,
      posts: {},
      error: []
    }
  }
}
</script>

