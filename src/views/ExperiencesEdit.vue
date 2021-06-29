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
          placeholder="start date"
        />
      </div>
      <div class="form-group">
        <label>End Date: </label>
        <input
          type="text"
          class="form-control"
          v-model="experience.end_date"
          placeholder="end date"
        />
      </div>
      <div class="form-group">
        <label>Job Title: </label>
        <input
          type="text"
          class="form-control"
          v-model="experience.job_title"
          placeholder="job title"
        />
      </div>
      <div class="form-group">
        <label>Company Name: </label>
        <input
          type="text"
          class="form-control"
          v-model="experience.company_name"
          placeholder="company name"
        />
      </div>
      <div class="form-group">
        <label>Details: </label>
        <input
          type="text"
          class="form-control"
          v-model="experience.details"
          placeholder="details"
        />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <p>{{ experience }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "This is the Experience Edit Page!",
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
    axios.get(`"/experience/${this.$route.params.id}"`).then((response) => {
      console.log("experience Object: ", response.data);
      this.experience = response.data;
    });
  },
  methods: {
    updateExperience: function () {
      axios.patch(`"/experience/${this.$route.params.id}"`).then((response) => {
        console.log("Updated Capstone Object:", response.data);
        this.experience = response.data;
      });
    },
  },
};
</script>
