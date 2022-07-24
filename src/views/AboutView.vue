<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
    <a-button type="primary" @click="getUserInfo()">新增</a-button>
  </div>
</template>
<script lang="ts">
import { onBeforeMount, onBeforeUnmount, onBeforeUpdate, onErrorCaptured, onMounted, onRenderTracked, onRenderTriggered, onUnmounted, onUpdated } from "@vue/runtime-core";
import { Button, ButtonGroup } from "ant-design-vue";
import { Options, setup, Vue } from "vue-class-component";
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
  // v3 生命周期钩子写法
  setup() {
    console.log("beforeCreate and created");
    onBeforeMount(()=>{});
    onMounted(()=>{});
    onBeforeUpdate(()=>{});
    onUpdated(()=>{});
    onBeforeUnmount(()=>{});
    onUnmounted(()=>{});
    onErrorCaptured(()=>{});
    // 以下为调试用
    onRenderTracked(()=>{});
    onRenderTriggered(()=>{});
  }

  // 获取用户名
  getUserInfo() {
    request.get("user/info", {}).then(res => {
      console.log(res);
    });
  }
}
</script>
