<template>
  <div class="about">
    <div>
      <h1>Student Profile</h1>
      <p>{{ currentStudent }}</p>
      <router-link to="/students/:id/edit">Edit Student Info</router-link>
    </div>
    <div>
      <h1>Education</h1>
      <router-link to="/educations/:id/edit">Edit Education</router-link>
      <p>{{ education }}</p>
    </div>
    <div>
      <h1>Experience</h1>
      <router-link to="/experiences/:id/edit">Edit Experience</router-link>
      <p>{{ experience }}</p>
    </div>
    <div>
      <h1>Skills</h1>
      <p>{{ skills }}</p>
    </div>
    <div>
      <h1>Capstone</h1>
      <router-link to="/capstones/:id/edit">Edit Capstone</router-link>
      <p>{{ capstone }}</p>
    </div>
  </div>
</template>

<script>
// import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      currentStudent: {
        first_name: "Brianna",
        last_name: "Samson",
        email: "bSamson@gmail.com",
        phone_number: "",
        bio: "",
        linkedin_url: "",
        twitter_handle: "",
        personal_url: "",
        resume_url: "",
        github_url: "",
        photo_url: "",
      },
      educations: [
        {
          start_date: "",
          end_date: "",
          degree: "",
          university: "",
          details: "",
        },
        {
          start_date: "",
          end_date: "",
          degree: "",
          university: "",
          details: "",
        },
        {
          start_date: "",
          end_date: "",
          degree: "",
          university: "",
          details: "",
        },
        {
          start_date: "",
          end_date: "",
          degree: "",
          university: "",
          details: "",
        },
        {
          start_date: "",
          end_date: "",
          degree: "",
          university: "",
          details: "",
        },
      ],
      experiences: [
        {
          start_date: "",
          end_date: "",
          job_title: "",
          company_name: "",
          details: "",
        },
        {
          start_date: "",
          end_date: "",
          job_title: "",
          company_name: "",
          details: "",
        },
        {
          start_date: "",
          end_date: "",
          job_title: "",
          company_name: "",
          details: "",
        },
        {
          start_date: "",
          end_date: "",
          job_title: "",
          company_name: "",
          details: "",
        },
      ],
      skills: [
        "basket weaving",
        "motocross",
        "painting",
        "crypto trading",
        "kayaking",
        "python",
      ],
      capstones: [
        {
          name: "",
          description: "",
          url: "",
          image: "",
        },
        {
          name: "",
          description: "",
          url: "",
          image: "",
        },
        {
          name: "",
          description: "",
          url: "",
          image: "",
        },
      ],
    };
  },
};
</script>
