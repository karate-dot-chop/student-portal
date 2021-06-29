<template>
  <div class="skills-edit">
    <p>{{ skill }}</p>
    <form v-on:submit.prevent="updateSkill()">
      <h1>Edit Skill</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>

      <div class="form-group">
        <label>Skill:</label>
        <input type="text" class="form-control" v-model="skill.name" />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to SkillsEdit",
      skill: {
        name: "",
      },
      errors: [],
    };
  },
  created: function () {
    axios.get(`"/skill/${this.$route.params.id}"`).then((response) => {
      console.log("Skill Object: ", response.data);
      this.skill = response.data;
    });
  },
  methods: {
    updateSkill: function () {
      axios
        .patch(`"/skill/${this.$route.params.id}"`)
        .then((response) => {
          console.log("Updated Skill Object:", response.data);
          this.skill = response.data;
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
    deleteSkill: function () {
      axios
        .delete(`"/skill/${this.$route.params.id}"`)
        .then((response) => {
          console.log("Skill Delete Message:", response.data);
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
