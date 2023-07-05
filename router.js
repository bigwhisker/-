import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/pages/Home.vue'
import About from '@/pages/About.vue'
Vue.use(Router)
const routes=[
  {
    path:'/',
    name:'Home',
    component:Home
  },
  {
    path:'/About',
    name:'About',
    component:About,
    beforeEnter(to,from,next){
      // console.log(localStorage);//不生效
      next()
    }
  },
]
let router=new Router({
  mode:'history',
  routes
})
router.beforeEach((to,from,next)=>{
  // console.log(to);
  // if (to.name=='Home') {
  //   next('/About')
  // }else{
  //   next()
  // }
  next()

})
export function createRouter(){
  return router
}

// export function createRouter(){
//   return new Router({
//     mode:'history',
//     routes
//   })
// }
