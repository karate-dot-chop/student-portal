<template>
  <div class="resumes-index">
    <h1>Resume</h1>
    <div v-for="resume in resumes" v-bind:key="resume.id">
      <h2>{{ resume.name }}</h2>
      <img v-bind:src="resume.url" v-bind:alt="resume.name" />
      <!-- <p>Width: {{ resume.width }}</p>
      <p>Height: {{ resume.height }}</p> -->
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      resumes: [],
    };
  },
  created: function () {
    this.indexResumes();
  },
  methods: {
    indexResumes: function () {
      axios.get("/resumes").then((response) => {
        console.log("resumes index", response);
        this.resumes = response.data;
      });
    },
  },
};
</script>
