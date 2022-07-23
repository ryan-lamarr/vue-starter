<template>
  <div class="about">
    <h1>This is an about page</h1>
    <p>{{ msg }}</p>
    <a-button type="primary">新增</a-button>
  </div>
</template>
<script lang="ts">
import { Button, ButtonGroup } from "ant-design-vue";
import { Options, Vue } from "vue-class-component";

@Options({
  props: {
    msg: String,
    AButton: Button,
    AButtonGroup: ButtonGroup,
  },
})
export default class HomeView extends Vue {
  msg = 1111;
}
</script>
