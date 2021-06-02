<template>
  <div class="home">
    <h1>Home</h1>
    <p>Here you can read and write your notes.</p>

    <v-dialog v-model="dialog" persistent>
      <template v-slot:activator="{ on, attrs }">
        <v-btn color="success" dark v-bind="attrs" v-on="on">
          <v-icon left>mdi-plus</v-icon>Add
        </v-btn>
      </template>

      <v-card>
        <v-card-title>
          <h5>Add a note</h5>
        </v-card-title>
        <v-card-text>
          <v-container>
            <v-row>
              <v-col cols="12">
                <v-text-field
                  label="Title"
                  outlined
                  required
                  v-model="newTitle"
                  :rules="[
                    (v) => v.length <= 50 || 'Must be below 50 characters.',
                  ]"
                />
              </v-col>

              <v-col cols="12">
                <v-textarea
                  label="Text"
                  outlined
                  required
                  v-model="newText"
                  rows="4"
                  counter
                  :rules="[
                    (v) => v.length <= 250 || 'Must be below 250 characters.',
                  ]"
                />
              </v-col>

              <v-col cols="12">
                <v-alert
                  v-model="inputError"
                  type="error"
                  text
                  dismissible
                  transition="scroll-y-transition"
                >
                  Please fill title <strong>and</strong> text.
                </v-alert>
              </v-col>
            </v-row>
          </v-container>
        </v-card-text>

        <v-card-actions>
          <v-spacer />
          <v-btn fab small color="success" @click="addNote">
            <v-icon>mdi-content-save</v-icon>
          </v-btn>
          <v-btn fab small color="error" @click="dialog = inputError = false">
            <v-icon>mdi-cancel</v-icon>
          </v-btn>
        </v-card-actions>
      </v-card>
    </v-dialog>

    <div class="mb-5" />

    <v-row v-if="!notes.length">
      <v-col cols="12">
        <p>Wow, such empty...</p>
      </v-col>
    </v-row>

    <v-row v-else>
      <v-col cols="4" v-for="(note, index) of notes" :key="index">
        <v-card elevation="5">
          <v-card-title class="note-title mx-3 pl-1 pb-0">
            {{ note.title }}
          </v-card-title>
          <v-card-text class="pt-3">{{ note.text }}</v-card-text>
        </v-card>
      </v-col>
    </v-row>
  </div>
</template>

<style scoped>
.note-title {
  border-bottom: 1px #ccc solid;
}
</style>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  name: "Home",

  data: () => ({
    dialog: false,
    newTitle: "",
    newText: "",
    inputError: false,
    notes: [
      {
        title: "Empty note",
        text: "Lorem ipsum dolor sit amet.",
      },
    ],
  }),

  methods: {
    addNote(): void {
      if (!this.newTitle.length || !this.newText.length) {
        this.inputError = true;
      } else if (this.newTitle.length > 50 && this.newText.length > 250) {
        this.inputError = false;
      } else {
        const newNote = {
          title: this.newTitle,
          text: this.newText,
        };
        this.notes = [newNote, ...this.notes];
        this.dialog = false;
        this.inputError = false;
        this.newTitle = "";
        this.newText = "";
      }
    },
  },
});
</script>
