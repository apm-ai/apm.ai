<template>
  <div class="app-container">
      <div style="margin-left:45%">
        {{world}}

       
      </div>

      <div>
        <h1 style="font-weight:800" class="bold-title">Risk-free Genealogy research from the most talented professionals on Earth</h1>
        <p>Stop overpaying researchers you don't know or who don't have the specific skills you need. Our process and network give you the best price with high-quality results.</p>
        <a class="btn large-btn btn-primary">How does it work</a>
      </div>
  </div>
</template>

<script>
export default {
  name: 'tmpl',
  data () {
    return {
      hello: '',
      world: ''
    }
  },
  watch: {
    $route() {
      // 当路由变化时，调用此函数
    },
    world(val) {
      // world发生变化时
    }
  },
  computed: {
    getAddr() {
      return process.env.API_ADDR
    }
  },
  methods: {
  },
  mounted() {
    this.world = this.$t('common.test')
  }
}
</script>

