<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
    <a-button type="primary" @click="getToken()">设置Token</a-button>
    <!-- <a-button type="primary" @click="showToken()">查看Token</a-button> -->
  </div>
</template>
<script lang="ts">
import { Vue } from "vue-class-component";
import request from "../api/request";

export default class HomeView extends Vue {
  msg = "success";
  // v3 类语法的生命周期钩子写法
  beforeCreate() {
    console.log("beforeCreate...");
  }
  created() {
    console.log("created...");
  }

  beforeMount() {
    console.log("onBeforeMount...");
  }
  mounted() {
    console.log("onMounted...");
  }
  beforeUpdate() {
    console.log("onBeforeUpdate...");
  }
  updated() {
    console.log("onUpdated...");
  }
  beforeUnmount() {
    console.log("onBeforeUnmount...");
  }
  unmounted() {
    console.log("onUnmounted...");
  }
    // 获取用户名
  getToken() {
    let token = "HJK3253KJJ3KH5G2G52652HJ3459F";
    this.$store.dispatch('setToken', token);
    this.showToken();
  }
  // 获取用户名
  showToken() {
    this.msg = this.$store.state.token;
    request.get("user/info").then((res) => {
      console.log(res);
    });
  }
}
</script>
