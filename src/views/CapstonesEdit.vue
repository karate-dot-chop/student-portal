<template>
  <div class="capstone">
    <form v-on:submit.prevent="updateCapstone()">
      <h1>Edit Capstone</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>

      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="capstone.name" />
      </div>
      <div class="form-group">
        <label>Description:</label>
        <input
          type="text"
          class="form-control"
          v-model="capstone.description"
          placeholder="name"
        />
      </div>
      <div class="form-group">
        <label>Url:</label>
        <input type="text" class="form-control" v-model="capstone.url" />
      </div>
      <div class="form-group">
        <label>Image:</label>
        <input
          type="text"
          class="form-control"
          v-model="capstone.screenshot"
          placeholder="Capstone Screenshot Image"
        />
      </div>

      <input type="submit" class="btn btn-primary" value="Submit" />
    </form>
    <p>{{ capstone }}</p>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      message: "Welcome to Vue.js!",
      capstone: {
        name: "",
        description: "",
        url: "",
        screenshot: "",
      },
    };
  },
  created: function () {
    axios.get(`"/capstone/${this.$route.params.id}"`).then((response) => {
      console.log("Capstone Object: ", response.data);
      this.capstone = response.data;
    });
  },
  methods: {
    updateCapstone: function () {
      axios.patch(`"/capstone/${this.$route.params.id}"`).then((response) => {
        console.log("Updated Capstone Object:", response.data);
        this.capstone = response.data;
      });
    },
  },
};
</script>
