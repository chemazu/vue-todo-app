<template>
  <Home title="Stuff" />
  <About title="About" />
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import Home from "./components/Home.vue";
import About from "./components/About/About.vue";

@Options({
  components: {
    Home,
    About,
  },
})
export default class App extends Vue {}
</script>
