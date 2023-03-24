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
header {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80px;
  margin-top: 20px;
}

nav {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100px;

}

body {
  display: flex;
  justify-content: center;
  align-items: center;  
}

.links {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;  
}

.links > * + * {
  margin-left: 15px;
}

button {
  width: 200px;
  background-color: lightgrey ;
  border-radius: 8px;
  border-style: solid;
  border-width: 1px;
  margin-top: 20px;
}

p {
  display: flex;
  justify-content: center;
  align-items: center;  
}

h2 {
  display: flex;
  justify-content: center;
  align-items: center; 
}


</style>
