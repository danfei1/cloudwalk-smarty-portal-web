<template>
  <div>
    <router-link v-for="(item,index) in routes"
                 :key="index"
                 class="links"
                 :to="{path:item.path}">{{item.meta?item.meta.title:'./'}}</router-link>
  </div>
</template>
<script>
export default {
  data () {
    return {
      routes: this.$router.options.routes,
      code:[
        'PCIU9158810',
        'TGHU9658290'
      ]
      // TGHU9658290
      // ,query:{container:code[0]}
    }
  },
  created () {
    console.log(this.$router.options.routes)
  }
}
</script>

<style scoped>
.links {
  display: block;
  height: 30px;
  line-height: 30px;
  margin-left: 20px;
  text-decoration: underline;
  color: #ffffff;
}
</style>
