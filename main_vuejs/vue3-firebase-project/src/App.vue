<template>
  <header>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1 class="title">Indeed 2.0</h1>
        </a>
      </div>

      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <router-link to="/about" class="navbar-item">About</router-link>
          <router-link v-if="isLoggedOut" to="/register" class="navbar-item">Register</router-link>
          <router-link v-if="!isLoggedOut" to="/addjob" class="navbar-item">Edit Jobs</router-link>
        </div>

        <div class="navbar-end">
          <div class="navbar-item">
            <div class="buttons">
              <button v-on:click="handleSignOut" v-if="isLoggedOut" class="button is-light">Sign in</button>
              <button v-on:click="handleSignOut" v-if="!isLoggedOut" class="button is-light">Sign out</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </header>

  <section class="section">
    <div class="container">
      <router-view />
    </div>
  </section>
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
