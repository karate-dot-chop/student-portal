<template>
  <div class="educations-new">
    <form v-on:submit.prevent="newCapstone()">
      <h1>Create New Education</h1>
      <div class="form-group">
        <label>Start Date:</label>
        <input type="text" class="form-control" v-model="editEducation.start_date" />
      </div>
      <div class="form-group">
        <label>End Date:</label>
        <input type="text" class="form-control" v-model="editEducation.end_date" />
      </div>
      <div class="form-group">
        <label>Degree:</label>
        <input type="text" class="form-control" v-model="editEducation.degree" />
      </div>
      <div class="form-group">
        <label>University:</label>
        <input type="text" class="form-control" v-model="editEducation.university_name" />
      </div>
      <div class="form-group">
        <label>Details:</label>
        <input type="text" class="form-control" v-model="editEducation.details" />
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
      editEducation: {
        start_date: "",
        end_date: "",
        degree: "",
        university_name: "",
        details: "",
      },
    };
  },
  created: function () {},
  methods: {
    newEducation: function () {
      axios
        .post("/educations/", this.editEducation)
        .then((response) => {
          console.log("Updated Capstone Object:", response.data);
          this.editEducation = response.data;
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
