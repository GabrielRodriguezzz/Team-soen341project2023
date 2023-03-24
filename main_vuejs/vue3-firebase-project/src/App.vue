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
      <h1>Indeed 2.0</h1>      
    </div>
  </header>

  <nav>
        <RouterLink to="/">Home</RouterLink>
        <RouterLink to="/about">About</RouterLink>
        <RouterLink to="/register">Register</RouterLink>
        <RouterLink to="/login">Login</RouterLink>

        <button @click="handleSignOut" v-if="isLoggedIn">Sign out</button>
  </nav>  

  <RouterView />
</template>

<script setup>
import { onMounted,ref } from 'vue';
import {getAuth, onAuthStateChanged, signOut} from "firebase/auth"
import { useRouter } from "vue-router";

const router = useRouter();
const isLoggedIn = ref(false);

let auth;

onMounted(() =>{
auth = getAuth();
onAuthStateChanged(auth, (user) => {
  if (user) {
    isLoggedIn.value = true;
    } else {
      isLoggedIn.value = false;
    }
  });
});


const handleSignOut = () => {
  signOut(auth).then(() =>{
    router.push("/login")
  });

};

</script>

<style>
nav {
  display: flex;
  flex-direction: column;
}
</style>
