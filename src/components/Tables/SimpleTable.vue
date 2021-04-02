<template>
  <div>
    <md-table v-model="users" :table-header-color="tableHeaderColor">
      <md-table-row slot="md-table-row" slot-scope="{ item }">
        <md-table-cell md-label="Name">{{ item.name }}</md-table-cell>
        <md-table-cell md-label="Email">{{ item.email }}</md-table-cell>
      </md-table-row>
    </md-table>
  </div>
</template>
<script>
import axios from "axios";
export default {
  name: "simple-table",
  props: {
    tableHeaderColor: {
      type: String,
      default: ""
    }
  },
  data() {
    return {
      selected: [],
      users: []
    };

  },
  mounted () {
    axios.get("demo/all")
      .then(response => {
        console.log(`response`);
        console.log(response.data);
        this.users = response.data;
      });
  }
};
</script>
