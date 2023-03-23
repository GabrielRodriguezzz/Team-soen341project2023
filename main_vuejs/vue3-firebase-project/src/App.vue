<script>
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { onBeforeMount } from 'vue';
import { getAuth, onAuthStateChanged } from "firebase/auth";

// export default {
//   setup() {
//     const router = useRouter();
//     const route = useRoute();
//     const auth = getAuth();

//     onBeforeMount(() => {
//       onAuthStateChanged(auth, (user) => {
//   if (!user) {
//     router.replace('/login');
    
//   } else if(route.path == '/login' || route.path == 'register'){
//     router.replace('/');
//   }
//   });

//     })
//   }
// }


</script>

<template>
  <header>
    

    <div class="wrapper">

        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
      
    </div>
  </header>
  

  <RouterView />
</template>

<style>
.wrapper {
  display: flex;
  flex-direction: column;
}
</style>
