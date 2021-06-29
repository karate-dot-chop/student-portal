<template>
  <div class="about">
    <div>
      <h1>Student Profile</h1>
      <p>{{ currentStudent }}</p>
      <router-link to="/students/:id/edit">Edit Student Info</router-link>
    </div>
    <div>
      <h1>Education</h1>
      <router-link to="/education/:id/edit">Edit Education</router-link>
      <p>{{ education }}</p>
    </div>
    <div>
      <h1>Experience</h1>
      <router-link to="/experiences/:id/edit">Edit Experience</router-link>
      <p>{{ experience }}</p>
    </div>
    <div>
      <h1>Skills</h1>
      <router-link to="/skills/:id/edit">Edit Skills</router-link>
      <p>{{ skills }}</p>
    </div>
    <div>
      <h1>Capstone</h1>
      <router-link to="/capstone/:id/edit">Edit Capstone</router-link>
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
      education: {
        start_date: "",
        end_date: "",
        degree: "",
        university: "",
        details: "",
      },
      experience: {
        start_date: "",
        end_date: "",
        job_title: "",
        company_name: "",
        details: "",
      },
      skills: [
        "basket weaving",
        "motocross",
        "painting",
        "crypto trading",
        "kayaking",
        "python",
      ],
      capstone: {
        name: "",
        description: "",
        url: "",
        image: "",
      },
    };
  },
};
</script>
