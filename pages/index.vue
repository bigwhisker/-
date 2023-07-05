<template>
  <div>
   首页
   <nuxt-link :to="{name:'list',query:{id:1},params:{id:2}}">link的方式</nuxt-link>
   <button @click="btn">js跳转</button>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
export default Vue.extend({
  name: 'IndexPage',
  data(){
   return {
    str:'123'
   }
  },
  middleware:'auth',
  // validate({params,query}: { params: any, query: { [key: string]: string | (string | null)[] } }){
  //   if (typeof query.id === 'string') {
  //     console.log(query.id,'validate');
  //     return /^\d+$/.test(query.id) 
  //   }
  //   return false
  // },

 
  methods:{
    btn(){
      // this.$router.push({
      //   path:'/list',
      //   query:{a:1}
      // });
      // this.$router.push({
      //   name:'list',
      //   params:{b:2}
      // })
    }
  },
  beforeCreate() {
      console.log('beforeCreate');
  },
  created() {
    console.log('created');
  },
  beforeUpdate(){
    console.log('beforeUpdate');
  },
  updated() {
    console.log('updated');
  },
})
</script>
