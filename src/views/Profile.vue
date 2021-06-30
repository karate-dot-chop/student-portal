<template>
  <div class="about">
    <div>
      <h1>Student Profile</h1>
      <p><b>First Name: </b>{{ currentStudent.first_name }}</p>
      <p><b>Last Name: </b>{{ currentStudent.last_name }}</p>
      <p><b>Email: </b>{{ currentStudent.email }}</p>
      <p><b>Phone: </b>{{ currentStudent.phone_number }}</p>
      <p><b>Bio: </b>{{ currentStudent.bio }}</p>
      <p><b>LinkedIn: </b>{{ currentStudent.linkedin_url }}</p>
      <p><b>Twitter: </b>{{ currentStudent.twitter_handle }}</p>
      <p><b>Personal Site: </b>{{ currentStudent.personal_url }}</p>
      <p><b>Resume: </b>{{ currentStudent.resume_url }}</p>
      <p><b>Github: </b>{{ currentStudent.github_url }}</p>
      <p><b>Photo Url: </b>{{ currentStudent.photo_url }}</p>
      <router-link to="/students/:id/edit">Edit Student Info</router-link>
    </div>
    <div>
      <h1>Education</h1>
      <div v-for="education in educations" v-bind:key="education.id">
        <p><b>Univeristy:</b> {{ education.university }}</p>
        <p><b>Degree:</b> {{ education.degree }}</p>
        <p><b>Start Date:</b> {{ education.start_date }}</p>
        <p><b>End_Date:</b> {{ education.end_date }}</p>
        <p><b>Details:</b> {{ education.details }}</p>
        <router-link to="/educations/:id/edit">Edit Education</router-link>
      </div>
    </div>
    <div>
      <h1>Experience</h1>
      <div v-for="experience in experiences" v-bind:key="experience.id">
        <p><b>Company:</b> {{ experience.company_name }}</p>
        <p><b>Job Title:</b> {{ experience.job_title }}</p>
        <p><b>Start Date:</b> {{ experience.start_date }}</p>
        <p><b>End Date:</b> {{ experience.end_date }}</p>
        <p><b>Details:</b> {{ experience.details }}</p>
        <router-link to="/experiences/:id/edit">Edit Experience</router-link>
      </div>
    </div>
    <div>
      <h1>Skills</h1>
      <div v-for="skill in skills" v-bind:key="skill.id">
        <p>
          {{ skill.name }} <button v-on:click="destroySkill">Delete</button>
        </p>
      </div>
      <div>
        <input v-model="newSkill" type="text" placeholder="New Skill" />
        <button v-on:click="createSkill()">Add Skill</button>
      </div>
    </div>
    <div>
      <h1>Capstones</h1>
      <div v-for="capstone in capstones" v-bind:key="capstone.id">
        <p><b>Name:</b> {{ capstone.name }}</p>
        <p><b>Description:</b> {{ capstone.description }}</p>
        <p><b>URL:</b> {{ capstone.url }}</p>
        <p><b>Image:</b> {{ capstone.image }}</p>
        <router-link to="/capstones/:id/edit">Edit Capstone</router-link>
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
      currentStudent: {
        first_name: "Brianna",
        last_name: "Samson",
        email: "bSamson@gmail.com",
        phone_number: "650-513-9133",
        bio: "I love to learn and spend my time surfing!",
        linkedin_url: "",
        twitter_handle: "",
        personal_url: "",
        resume_url: "",
        github_url: "",
        photo_url: "",
      },
      educations: [
        {
          start_date: "2010",
          end_date: "2014",
          degree: "BA in Computer Programming",
          university: "University of California, Santa Cruz",
          details: "",
        },
        {
          start_date: "2014",
          end_date: "2018",
          degree: "Master's in Computer Science ",
          university: "Caltech",
          details: "",
        },
      ],
      experiences: [
        {
          start_date: "2018",
          end_date: "2020",
          job_title: "Junior Software Engineer",
          company_name: "Volta Charging",
          details:
            "Architect onboard data processing and machine learning solutions.",
        },
        {
          start_date: "2020",
          end_date: "2021",
          job_title: "Software Development Engineer",
          company_name: "WANdisco",
          details:
            "Responsible for driving the software development process towards quality-centric methodologies.",
        },
      ],
      skills: [{ name: "basketweaving" }, { name: "carrot shaving" }],
      editStudent: "",
      newSkill: "",
      capstones: [
        {
          name: "Netflix-Clone",
          description: "Created a clone of the popular Netflix application!",
          url: "",
          image: "",
        },
        {
          name: "StitchFixes",
          description:
            "Created a full-stack application where users can shop for clothes online and get recommendations for outfits",
          url: "",
          image: "",
        },
        {
          name: "HiFresh",
          description:
            "Created a full-stack application where users can search for recipes based off of their pantry ingredients",
          url: "",
          image: "",
        },
      ],
    };
  },
  created: function () {
    axios.get(`/students/${this.$route.params.id}`).then((response) => {
      console.log("Students Object: ", response.data);
      this.editStudent = response.data;
    });
    axios.get(`/skills/${this.$route.params.id}`).then((response) => {
      console.log("Skills Object: ", response.data);
      this.editSkill = response.data;
    });
    axios.get("/educations").then((response) => {
      console.log("Skills Object: ", response.data);
      this.educations = response.data;
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
