<template>
  <div class="about">
    <h1>About</h1>
    <table>
      <tbody>
        <tr>
          <th>Author</th>
          <td>Jakub Suchenek</td>
        </tr>
        <tr>
          <th>Source</th>
          <td>
            GitHub
            <a
              target="_blank"
              rel="noreferrer noopener"
              href="https://github.com/AnonymousX86/notes-manager"
              style="text-decoration: none"
            >
              <v-icon color="info">mdi-link</v-icon>
            </a>
          </td>
        </tr>
        <tr>
          <th>Version</th>
          <td>0.1.0</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<style scoped>
table {
  border-collapse: collapse;
}
td, th {
  border-bottom: 1px rgba(102, 102, 102, .5) solid;
  padding: 5px 16px;
}
th {
  padding-right: 10px;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "About",
});
</script>
