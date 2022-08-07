<template>
  <div class="about">
    <h1>About</h1>
    <p>This is the about page</p>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import "./about.css";

@Options({
  props: {
    title: String,
  },
})
export default class About extends Vue {
  title!: string;
}
</script>
;
