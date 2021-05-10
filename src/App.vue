<template>
  <div id="app">
    <div>
      <table border="1px">
        <tr>
          <th>Name</th>
          <th>Climate</th>
          <th>Created</th>
          <th>Diameter</th>
          <th>Edited</th>
          <th>Films</th>
          <th>Gravity</th>
          <th>Population</th>
        </tr>
        <tr v-for="planet in planets" :key="planet">
          <td>{{ planet.name }}</td>
          <td>{{ planet.climate }}</td>
          <td>{{ planet.created }}</td>
          <td>{{ planet.diameter }}</td>
          <td>{{ planet.edited }}</td>
          <td>{{ planet.films }}</td>
          <td>{{ planet.gravity }}</td>
          <td>{{ planet.population }}</td>
        </tr>
      </table>

      <p></p>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      planets: [],
      results: [],
    };
  },
  mounted() {
    axios.get("https://swapi.dev/api/planets").then((response) => {
      this.planets = response.data.results;
      console.log(this.planets);
    });
  },
};
</script>

<style></style>
