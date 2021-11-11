<template>
 <div>
 <router-view></router-view>
 <FooterGuide></FooterGuide>
 </div>
</template>

<script type="text/ecmascript-6">
import FooterGuide from '@/components/FooterGuide/FooterGuide'
 export default {
  async mounted(){
    //通知action异步获取adress并保存到state
    this.$store.dispatch('getAddress')
   },
 components:{
   FooterGuide
 }
 
 }
</script>

<style scoped lang="stylus" rel="stylesheet/stylus">

 
</style>
