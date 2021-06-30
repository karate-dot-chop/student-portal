<template>
  <div class="about">
    <div>
      <h1>Student Profile</h1>
      <p>
        <b>First Name:</b>
        {{ currentStudent.first_name }}
      </p>
      <p>
        <b>Last Name:</b>
        {{ currentStudent.last_name }}
      </p>
      <p>
        <b>Email:</b>
        {{ currentStudent.email }}
      </p>
      <p>
        <b>Phone:</b>
        {{ currentStudent.phone_number }}
      </p>
      <p>
        <b>Bio:</b>
        {{ currentStudent.bio }}
      </p>
      <p>
        <b>LinkedIn:</b>
        {{ currentStudent.linkedin_url }}
      </p>
      <p>
        <b>Twitter:</b>
        {{ currentStudent.twitter_handle }}
      </p>
      <p>
        <b>Personal Site:</b>
        {{ currentStudent.personal_url }}
      </p>
      <p>
        <b>Resume:</b>
        {{ currentStudent.resume_url }}
      </p>
      <p>
        <b>Github:</b>
        {{ currentStudent.github_url }}
      </p>
      <p>
        <b>Photo Url:</b>
        {{ currentStudent.photo_url }}
      </p>
      <router-link to="/students/1/edit">Edit Student Info</router-link>
      <!--Needs soft-coded :id later-->
    </div>
    <div>
      <h1>Education</h1>
      <router-link to="/educations/new">New Education</router-link>
      <br />
      <div v-for="education in educations" v-bind:key="education.id">
        <p>
          <b>University:</b>
          {{ education.university }}
        </p>
        <p>
          <b>Degree:</b>
          {{ education.degree }}
        </p>
        <p>
          <b>Start Date:</b>
          {{ education.start_date }}
        </p>
        <p>
          <b>End_Date:</b>
          {{ education.end_date }}
        </p>
        <p>
          <b>Details:</b>
          {{ education.details }}
        </p>
        <router-link to="/educations/1/edit">Edit Education</router-link>
        <!--Needs soft-coded :id later-->
      </div>
    </div>
    <div>
      <h1>Experience</h1>
      <router-link to="/experiences/new">New Experience</router-link>
      <br />
      <div v-for="experience in experiences" v-bind:key="experience.id">
        <p>
          <b>Company:</b>
          {{ experience.company_name }}
        </p>
        <p>
          <b>Job Title:</b>
          {{ experience.job_title }}
        </p>
        <p>
          <b>Start Date:</b>
          {{ experience.start_date }}
        </p>
        <p>
          <b>End Date:</b>
          {{ experience.end_date }}
        </p>
        <p>
          <b>Details:</b>
          {{ experience.details }}
        </p>
        <router-link to="/experiences/1/edit">Edit Experience</router-link>
        <!--Needs soft-coded :id later-->
      </div>
    </div>
    <div>
      <h1>Skills</h1>
      <div v-for="skill in skills" v-bind:key="skill.id">
        <p>
          {{ skill.name }}
          <button v-on:click="destroySkill">Delete</button>
        </p>
      </div>
      <div>
        <input v-model="newSkill" type="text" placeholder="New Skill" />
        <button v-on:click="createSkill()">Add Skill</button>
      </div>
    </div>
    <div>
      <h1>Capstones</h1>
      <router-link to="/capstones/new">New Capstone</router-link>
      <br />
      <div v-for="capstone in capstones" v-bind:key="capstone.id">
        <p>
          <b>Name:</b>
          {{ capstone.name }}
        </p>
        <p>
          <b>Description:</b>
          {{ capstone.description }}
        </p>
        <p>
          <b>URL:</b>
          {{ capstone.url }}
        </p>
        <p>
          <b>Image:</b>
          {{ capstone.image }}
        </p>
        <router-link to="/capstones/1/edit">Edit Capstone</router-link>
        <!--Needs soft-coded :id later-->
      </div>
    </div>
  </div>
</template>

<style>
p b {
  font-weight: bold;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      currentStudent: {},
      educations: [],
      experiences: [],
      skills: [],
      newSkill: "",
      capstones: [],
    };
  },
  created: function () {
    axios.get("/students/1").then((response) => {
      //needs soft-coded id for students
      console.log("Students Object: ", response.data);
      this.currentStudent = response.data;
    });
    axios.get("/skills").then((response) => {
      console.log("Skills Object: ", response.data);
      this.skills = response.data;
    });
    axios.get("/educations").then((response) => {
      console.log("Educations Object: ", response.data);
      this.educations = response.data;
    });
    axios.get("/experiences").then((response) => {
      console.log("Experiences Object: ", response.data);
      this.experiences = response.data;
    });
    axios.get("/capstones").then((response) => {
      console.log("Capstones Object: ", response.data);
      this.capstones = response.data;
    });
  },
  methods: {
    destroySkill: function () {
      if (confirm("Are you sure you want to delete this skill?")) {
        axios.delete(`/skills/${this.skill.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/skills");
        });
      }
    },
    createSkill: function () {
      axios
        .post("/skills", this.newSkill)
        .then((response) => {
          console.log(response.data);
          this.skills.push(response.data);
        })
        .catch((error) => {
          console.log(error.response.data.errors);
        });
    },
  },
};
</script>
