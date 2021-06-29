<template>
  <div class="students-edit">
    <form v-on:submit.prevent="updateStudent()">
      <h1>Edit Student Info</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>

      <div class="form-group">
        <label>First Name:</label>
        <input type="text" class="form-control" v-model="currentStudent.first_name" />
      </div>
      <div class="form-group">
        <label>Last Name:</label>
        <input type="text" class="form-control" v-model="currentStudent.last_name" placeholder="name" />
      </div>
      <div class="form-group">
        <label>Email:</label>
        <input type="text" class="form-control" v-model="currentStudent.email" />
      </div>
      <div class="form-group">
        <label>Phone Number:</label>
        <input type="text" class="form-control" v-model="currentStudent.phone_number" />
      </div>
      <div class="form-group">
        <label>Bio:</label>
        <input type="text" class="form-control" v-model="currentStudent.bio" />
      </div>
      <div class="form-group">
        <label>LinkedIn:</label>
        <input type="text" class="form-control" v-model="currentStudent.linkedin_url" placeholder="LinkedIn URL" />
      </div>
      <div class="form-group">
        <label>Twitter:</label>
        <input type="text" class="form-control" v-model="currentStudent.twitter_handle" placeholder="Twitter Handle" />
      </div>
      <div class="form-group">
        <label>Personal Site:</label>
        <input type="text" class="form-control" v-model="currentStudent.personal_url" placeholder="Personal Web Site" />
      </div>
      <div class="form-group">
        <label>Resume:</label>
        <input type="text" class="form-control" v-model="currentStudent.resume_url" placeholder="Resume URL" />
      </div>
      <div class="form-group">
        <label>Github:</label>
        <input type="text" class="form-control" v-model="currentStudent.github_url" placeholder="Github URL" />
      </div>
      <div class="form-group">
        <label>Photo:</label>
        <input type="text" class="form-control" v-model="currentStudent.photo_url" placeholder="Profile Photo URL" />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <p>{{ currentStudent }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      currentStudent: {
        first_name: "",
        last_name: "",
        email: "",
        phone_number: "",
        bio: "",
        linkedin_url: "",
        twitter_handle: "",
        personal_url: "",
        resume_url: "",
        github_url: "",
        photo_url: "",
      },
    };
  },
  created: function () {
    axios.get(`"/capstone/${this.$route.params.id}"`).then((response) => {
      console.log("Capstone Object: ", response.data);
      this.capstone = response.data;
    });
  },
  methods: {
    updateStudent: function () {
      axios.patch(`"/capstone/${this.$route.params.id}"`).then((response) => {
        console.log("Updated Capstone Object:", response.data);
        this.capstone = response.data;
      });
    },
    deleteStudent: function () {
      axios.delete(`"/capstone/${this.$route.params.id}"`).then((response) => {
        console.log("Student Delete Message:", response.data);
      });
    },
  },
};
</script>
