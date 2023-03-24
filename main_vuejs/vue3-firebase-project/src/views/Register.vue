<template>    
    <section class="section">
      <div class="container">
        <h1 class="title">Create an Account</h1>
        <div class="field">
          <label class="label">Email</label>
          <div class="control">
            <input class="input" type="email" placeholder="Email" v-model="email" />
          </div>
        </div>
        <div class="field">
          <label class="label">Password</label>
          <div class="control">
            <input class="input" type="password" placeholder="Password" v-model="password" />
          </div>
        </div>
        <div class="field">
          <div class="control">
            <button class="button is-primary" @click="register">Register</button>
          </div>
        </div>       
      </div>
    </section>
  </template>
  
  <script>
  import { ref } from 'vue';
  import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
  import { useRouter } from 'vue-router';
  import router from '../router';
  
  export default {
    setup() {
      const email = ref("");
      const password = ref("");
  
      const register = () => {
        createUserWithEmailAndPassword(getAuth(), email.value, password.value)
          .then((data) =>{
            console.log("Successfully registered");
            router.push('/')
          })
          .catch((error) => {
            console.log(error.code);
            alert(error.message);
          });
      };
      
      return {
        email,
        password,
        register
      }
    }
  }
  </script>

  <style>

</style>
  