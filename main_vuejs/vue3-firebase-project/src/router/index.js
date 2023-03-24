import { getAuth } from 'firebase/auth';
import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/HomeView.vue'),
      meta: {
        requiresAuth: true,
      }
    },
    {
      path: '/about',
      name: 'About',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/login',
      name: 'Login',
      component: () => import('../views/Login.vue')
    },
    {
      path: '/register',
      name: 'Register',
      component: () => import('../views/Register.vue')
    },
    {
      path: '/addjob',
      name: 'AddJob',
      component: () => import('../views/AddJob.vue')
    }
  ]
})

//Code to restrict which pages can be accessed by which users
// router.beforeEach((to, from, next) =>{
// if(to.matched.some((record) => record.meta.requiresAuth)){

//   if(getAuth().currentUser){
//     next();
//   } else{
//     alert("you dont have access!");
//     next("/about");
//   }
// }else{
//   next();
// }

// });

export default router
