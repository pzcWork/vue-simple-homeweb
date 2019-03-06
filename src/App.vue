<template>
  <div id="app">
    <pageHeader></pageHeader>
    <router-view></router-view>
    <pageFooter></pageFooter>
  </div>
</template>

<script>
import index from './components/Index.vue'
import PageHeader from './components/PageHeader.vue'
import PageFooter from './components/PageFooter.vue'
export default {
  name: 'app',
  data () {
    return {
      
    }
  },
  components: {
    pageHeader: PageHeader,
    pageFooter : PageFooter
  }
}
</script>

<style>
@import '/static/css/common.css';
@import '/static/css/normalize.css';
</style>
