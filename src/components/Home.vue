<template>
  <div class="home">
    <h1>{{ title }}</h1>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import "./home.css";

@Options({
  props: {
    title: String,
  },
})
export default class Home extends Vue {
  title!: string;
}
</script>
;
