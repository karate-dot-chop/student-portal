<template>
  <div class="capstones">
    <form v-on:submit.prevent="editCapstone()">
      <h1>Edit Capstone</h1>
      <div class="form-group">
        <label>Name:</label>
        <input
          type="text"
          class="form-control"
          v-model="currentCapstone.name"
        />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input
          type="text"
          class="form-control"
          v-model="currentCapstone.description"
          placeholder="name"
        />
      </div>
      <div class="form-group">
        <label>Url:</label>
        <input type="text" class="form-control" v-model="currentCapstone.url" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input
          type="text"
          class="form-control"
          v-model="currentCapstone.screenshot"
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
      currentCapstone: {
        name: "clone a matic",
        description: "clones the world on fire",
        url: "http://www.somecloneapp.com",
        screenshot: "http://somescreenshot.jpg",
      },
    };
  },
  created: function () {
    axios.get(`/capstones/${this.$route.params.id}`).then((response) => {
      console.log("Capstone Object: ", response.data);
      this.editCapstone = response.data;
    });
  },
  methods: {
    editCapstone: function () {
      axios
        .patch(`/capstones/${this.$route.params.id}`)
        .then((response) => {
          console.log("Updated Capstone Object:", response.data);
          this.capstone = response.data;
          this.$router.push("/profile");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
          console.log(error.response.data.message);
        });
    },
    deleteCaptstone: function () {
      if (confirm("Do you really want to delete this capstone?")) {
        axios
          .delete(`/capstones/${this.currentCapstone.id}`)
          .then((response) => {
            console.log(response.data);
            this.$router.push("/profile");
          });
      }
    },
  },
};
</script>
