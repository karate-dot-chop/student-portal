<template>
  <div class="education-edit">
    <form v-on:submit.prevent="updateEducation()">
      <h1>Edit Education</h1>
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
          v-model="education.start_date"
          placeholder="start date"
        />
      </div>
      <div class="form-group">
        <label>End Date: </label>
        <input
          type="text"
          class="form-control"
          v-model="education.end_date"
          placeholder="end date"
        />
      </div>
      <div class="form-group">
        <label>Degree: </label>
        <input
          type="text"
          class="form-control"
          v-model="education.degree"
          placeholder="degree"
        />
      </div>
      <div class="form-group">
        <label>University: </label>
        <input
          type="text"
          class="form-control"
          v-model="education.university_name"
          placeholder="university"
        />
      </div>
      <div class="form-group">
        <label>Details: </label>
        <input
          type="text"
          class="form-control"
          v-model="education.details"
          placeholder="details"
        />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
      <button v-on:click="destroyEducation()">Delete Post</button>
    </form>
    <p>{{ education }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "This is Education Edit Page!",
      education: {
        start_date: "",
        end_date: "",
        degree: "",
        university: "",
        details: "",
      },
    };
  },
  created: function () {
    axios.get(`"/education/${this.$route.params.id}"`).then((response) => {
      console.log("Education Object: ", response.data);
      this.education = response.data;
    });
  },
  methods: {
    updateEducation: function () {
      axios.patch(`"/education/${this.$route.params.id}"`).then((response) => {
        console.log("Updated Capstone Object:", response.data);
        this.education = response.data;
      });
    },
    destroyEducation: function () {
      if (confirm("Would you like to delete this instance?")) {
        axios.delete(`/educations/${this.recipe.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/profile");
        });
      }
    },
  },
};
</script>
