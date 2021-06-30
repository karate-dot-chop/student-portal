<template>
  <div class="experiences-new">
    <form v-on:submit.prevent="newExperience()">
      <h1>Create New Experience</h1>
      <div class="form-group">
        <label>Start Date:</label>
        <input type="text" class="form-control" v-model="editExperience.start_date" />
      </div>
      <div class="form-group">
        <label>End Date:</label>
        <input type="text" class="form-control" v-model="editExperience.end_date" />
      </div>
      <div class="form-group">
        <label>Job Title:</label>
        <input type="text" class="form-control" v-model="editExperience.job_title" />
      </div>
      <div class="form-group">
        <label>Company:</label>
        <input type="text" class="form-control" v-model="editExperience.company_name" />
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input type="text" class="form-control" v-model="editExperience.details" />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      editExperience: {
        start_date: "",
        end_date: "",
        job_title: "",
        company_name: "",
        details: "",
      },
    };
  },
  created: function () {},
  methods: {
    newExperience: function () {
      axios
        .post("/experiences/", this.editExperience)
        .then((response) => {
          console.log("Updated Capstone Object:", response.data);
          this.editExperience = response.data;
          this.$router.push("/profile");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.message);
        });
    },
  },
};
</script>
