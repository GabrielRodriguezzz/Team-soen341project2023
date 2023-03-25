<template>
    
    <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Title</label>
        </div>
        <div class="field-body">
          <div class="field">
            <p class="control is-expanded has-icons-left">
              <input class="input" type="text" placeholder="Job Title">
              <span class="icon is-small is-left">
                <i class="fas fa-user"></i>
              </span>
            </p>
          </div>
        </div>
      </div>
      
      <div class="field is-horizontal">
        <div class="field-label is-normal">
          <label class="label">Description</label>
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <textarea class="textarea" placeholder="Enter job description"></textarea>
            </div>
          </div>
        </div>
      </div>
      
      <div class="field is-horizontal">
        <div class="field-label">
          <!-- Left empty for spacing -->
        </div>
        <div class="field-body">
          <div class="field">
            <div class="control">
              <button class="button is-primary">
                Post Job
              </button>
            </div>
          </div>
        </div>
      </div>
    </template>

  <script setup>

  import {ref, onMounted} from 'vue'
  import { db } from "@/main"
  import { collection, addDoc, getDocs } from "firebase/firestore"; 

  const addJobPosting = async () => {
    const docRef = await addDoc(collection(db, "job_postings"), {
      title: "Tokyo",
      description: "Japan",
      author: ""
    });
  }
  

  onMounted(() => {
    addJobPosting();
  });
  </script>
