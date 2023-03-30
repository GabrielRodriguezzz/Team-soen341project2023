<template>
  <header>
    <nav class="navbar is-primary" role="navigation" aria-label="main navigation">
      <div class="navbar-brand">
        <a class="navbar-item" href="/">
          <h1 class="title">Indeed 2.0</h1>
        </a>
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

  },
  mounted() {
  },
  methods: {
  },
};
</script>

<style>
@import 'bulma\css\bulma.min.css';
</style>
