<template>
  <div>
  列表
  </div>

</template>
<script  lang="ts">
import { defineComponent } from 'vue'
export default defineComponent({
  validate({params,query}: { params: any, query: { [key: string]: string | (string | null)[] } }){
    if (typeof query.a === 'string') {
      console.log(query.a,'validate');
      return /^\d+$/.test(query.a) 
    }
    return false
  },
  created() {
    console.log(this.$route);
    
  },
})

</script>

<style scoped lang="scss">


</style>
