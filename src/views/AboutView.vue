<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
    <a-button type="primary" @click="getUserInfo()">新增</a-button>
  </div>
</template>
<script lang="ts">
import { Button, ButtonGroup } from "ant-design-vue";
import { Options, Vue } from "vue-class-component";
import request from "../api/request"

@Options({
  props: {
    msg: String,
    AButton: Button,
    AButtonGroup: ButtonGroup,
  },
})
export default class HomeView extends Vue {
  msg = "success";
  // 获取用户名
  getUserInfo() {
    request.get("user/info", {}).then(res => {
      console.log(res);
    });
  }
}
</script>
