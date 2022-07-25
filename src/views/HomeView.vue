<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png" />
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App" />
    <a-button @click="getUser()">Ajax请求</a-button>
  </div>
</template>

<script lang="ts">
import { Options, Vue } from "vue-class-component";
import HelloWorld from "@/components/HelloWorld.vue"; // @ is an alias to /src
import ajaxUtil from "../utils/ajax";

@Options({
  components: {
    HelloWorld,
  },
})
export default class HomeView extends Vue {
  getUser() {
    ajaxUtil.ajax("abc.txt", (xhr: XMLHttpRequest) => {
      console.log(xhr.readyState);
    });
  }
}
</script>
