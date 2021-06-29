<template>
  <div class="about">
    <div>
      <h1>Student Profile</h1>
      <p>{{ currentStudent.first_name }}</p>
      <p>{{ currentStudent.last_name }}</p>
      <p>{{ currentStudent.email }}</p>
      <p>{{ currentStudent.phone_number }}</p>
      <p>{{ currentStudent.bio }}</p>
      <p>{{ currentStudent.linkedin_url }}</p>
      <p>{{ currentStudent.twitter_handle }}</p>
      <p>{{ currentStudent.personal_url }}</p>
      <p>{{ currentStudent.resume_url }}</p>
      <p>{{ currentStudent.github_url }}</p>
      <p>{{ currentStudent.photo_url }}</p>
      <router-link to="/students/:id/edit">Edit Student Info</router-link>
    </div>
    <div>
      <h1>Education</h1>
      <router-link to="/educations/:id/edit">Edit Education</router-link>
      <p>{{ educations }}</p>
    </div>
    <div>
      <h1>Experience</h1>
      <router-link to="/experiences/:id/edit">Edit Experience</router-link>
      <p>{{ experiences }}</p>
    </div>
    <div>
      <h1>Skills</h1>
      <p>{{ skills }}</p>
      <button v-on:click="destroySkill">Delete</button>
    </div>
    <div>
      <h1>Capstone</h1>
      <router-link to="/capstones/:id/edit">Edit Capstone</router-link>
      <p>{{ capstones }}</p>
    </div>
  </div>
</template>

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
          details: "Architect onboard data processing and machine learning solutions.",
        },
        {
          start_date: "2020",
          end_date: "2021",
          job_title: "Software Development Engineer",
          company_name: "WANdisco",
          details: "Responsible for driving the software development process towards quality-centric methodologies.",
        },
      ],
      skills: ["basket weaving", "motocross", "painting", "crypto trading", "kayaking", "python"],
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
  methods: {
    destroySkill: function () {
      if (confirm("Are you sure you want to delete this skill?")) {
        axios.delete(`/skills/${this.skill.id}`).then((response) => {
          console.log(response.data);
          this.$router.push("/skills");
        });
      }
    },
  },
};
</script>
