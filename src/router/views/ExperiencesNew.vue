<template>
  <div class="experiences-new">
    <form v-on:submit.prevent="newExperience()">
      <h1>Create New Capstone</h1>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="editExperience.name" />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input
          type="text"
          class="form-control"
          v-model="editExperience.description"
          placeholder="name"
        />
      </div>
      <div class="form-group">
        <label>Url:</label>
        <input type="text" class="form-control" v-model="editExperience.url" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input
          type="text"
          class="form-control"
          v-model="editExperience.screenshot"
        />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
    <button v-on:click="deleteCaptstone()">Delete Capstone</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      editExperience: {
        name: "",
        description: "",
        url: "",
        screenshot: "",
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
