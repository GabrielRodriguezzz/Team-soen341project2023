<template>
  <header>
    <div class="wrapper">
      <h1>Indeed 2.0</h1>      
    </div>
  </header>

  <nav>
    <div class="links">
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
      <router-link v-if="isLoggedOut" to="/register">Register</router-link>
      <router-link v-if="!isLoggedOut" to="/addjob">Edit Jobs</router-link>
    </div>

    <div class="buttonsTop">
      <button v-on:click="handleSignOut" v-if="isLoggedOut">Sign in</button>
      <button v-on:click="handleSignOut" v-if="!isLoggedOut">Sign out</button>
    </div>
  </nav>  

  <router-view />
</template>

<script>
import { getAuth, onAuthStateChanged, signOut } from "firebase/auth";


export default {
  data() {
    return {
      isLoggedOut: false,
    };
  },
  mounted() {
    const auth = getAuth();
    onAuthStateChanged(auth, (user) => {
      if (!user) {
        this.isLoggedOut = true;
      } else {
        this.isLoggedOut = false;
      }
    });
  },
  methods: {
    handleSignOut() {
      const auth = getAuth();
      signOut(auth).then(() => {
        this.$router.push("/login");
      });
    },
  },
};
</script>

<style>
@import 'bulma\css\bulma.min.css';
</style>
