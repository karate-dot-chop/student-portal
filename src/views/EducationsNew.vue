<template>
  <div class="educations-new">
    <form v-on:submit.prevent="newCapstone()">
      <h1>Create New Education</h1>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="editEducation.name" />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input
          type="text"
          class="form-control"
          v-model="editEducation.description"
          placeholder="name"
        />
      </div>
      <div class="form-group">
        <label>Url:</label>
        <input type="text" class="form-control" v-model="editEducation.url" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input
          type="text"
          class="form-control"
          v-model="editEducation.screenshot"
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
      editEducation: {
        name: "",
        description: "",
        url: "",
        screenshot: "",
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
