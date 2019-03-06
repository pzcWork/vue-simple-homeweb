<template>
  <div id="index">
    <pageContent v-if="contentState"></pageContent>
    <router-view></router-view>
  </div>
</template>

<script>
import PageContent from './PageContent.vue'
import {mapActions,mapGetters} from 'vuex'

export default {
  name: 'app',
  data () {
    return {
      
    }
  }, 
  components : {
    pageContent : PageContent
  },
  computed : {
    contentState : function(){
      return this.$store.getters.contentState
    }
  },
  mounted : function(){
    if(this.$route.path  != '/index'){
      this.$store.dispatch('pageContentHide');
    }else{
      this.$store.dispatch('pageContentShow');
    }
  },
  watch:{
    $route : function(to,from){
      this.$store.dispatch('pageNumberReset');    //当路由改变时，将文章列表当前第几页的信息重置为第1页
      if(to.path != '/index'){
        this.$store.dispatch('pageContentHide');
      }else{
        this.$store.dispatch('pageContentShow');
      }
    }
  }
}
</script>

<style>

</style>
