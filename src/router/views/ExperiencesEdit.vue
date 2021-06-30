/* eslint-disable prettier/prettier */
/* eslint-disable prettier/prettier */
<template>
  <div class="experience-edit">
    <form v-on:submit.prevent="updateExperience()">
      <h1>Edit Experience</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Start Date: </label>
        <input
          type="text"
          class="form-control"
          v-model="experience.start_date"
          placeholder="Start Date"
        />
      </div>
      <div class="form-group">
        <label>End Date: </label>
        <input
          type="text"
          class="form-control"
          v-model="experience.end_date"
          placeholder="End Date"
        />
      </div>
      <div class="form-group">
        <label>Job Title: </label>
        <input
          type="text"
          class="form-control"
          v-model="experience.job_title"
          placeholder="Job Title"
        />
      </div>
      <div class="form-group">
        <label>Company Name: </label>
        <input
          type="text"
          class="form-control"
          v-model="experience.company_name"
          placeholder="Company Name"
        />
      </div>
      <div class="form-group">
        <label>Details: </label>
        <input
          type="text"
          class="form-control"
          v-model="experience.details"
          placeholder="Details"
        />
      </div>
      <input type="submit" class="btn btn-primary" value="Submit" />
      <button v-on:click="destroyExperience()">Delete</button>
    </form>
    <p>{{ experience }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      experience: {
        start_date: "",
        end_date: "",
        job_title: "",
        company_name: "",
        details: "",
      },
    };
  },
  created: function () {
    axios.get(`/experiences/${this.$route.params.id}`).then((response) => {
      console.log("Experiences Object: ", response.data);
      this.experience = response.data;
    });
  },
  methods: {
    updateExperience: function () {
      axios
        .patch(`"/experience/${this.$route.params.id}"`)
        .then((response) => {
          console.log("Updated Capstone Object:", response.data);
          this.experiences = response.data;
          this.$router.push("/profile");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    destroyExperience: function () {
      if (confirm("Are you sure?")) {
        axios.delete(`/experiences/${this.experience.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/profile");
        });
      }
    },
  },
};
</script>
