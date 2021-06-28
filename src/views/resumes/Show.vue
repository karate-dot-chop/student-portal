<template>
  <div class="resumes-show">
    <h2>{{ resume.title }}</h2>
    <!-- <img :src="post.image" alt="" /> -->
    <p>{{ resume.body }}</p>
    <p>{{ resume.user_id }}</p>
    <router-link :to="`/resumes/${resume.id}/edit`">Edit</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      resume: {},
    };
  },
  created: function () {
    axios.get(`/resumes/${this.$route.params.id}`).then((response) => {
      console.log("Resume object", response.data);
      this.resume = response.data;
    });
  },
  methods: {},
};
</script>
