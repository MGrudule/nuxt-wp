import Vue from 'vue'
const WindowInstanceMap = new Vue({
  data() {
    return {
      scrollY: 0
    }
  },
  created() {
    window.addEventListener('scroll', e => {
      // Debounce this
      window.requestAnimationFrame(() => {
        this.scrollY = window.scrollY
      })
    })
  }
})
export default WindowInstanceMap
