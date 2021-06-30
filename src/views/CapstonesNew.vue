<template>
  <div class="capstones-new">
    <form v-on:submit.prevent="newCapstone()">
      <h1>Create New Capstone</h1>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="editCapstone.name" />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input type="text" class="form-control" v-model="editCapstone.description" />
      </div>
      <div class="form-group">
        <label>Url:</label>
        <input type="text" class="form-control" v-model="editCapstone.url" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input type="text" class="form-control" v-model="editCapstone.screenshot" />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <ul>
      <li class="text-danger" v-for="error in errors" v-bind:key="error">
        {{ error }}
      </li>
    </ul>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      errors: [],
      editCapstone: {
        name: "",
        description: "",
        url: "",
        screenshot: "",
      },
    };
  },
  created: function () {},
  methods: {
    newCapstone: function () {
      axios
        .post("/capstones/", this.editCapstone)
        .then((response) => {
          console.log("Updated Capstone Object:", response.data);
          this.editCapstone = response.data;
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
