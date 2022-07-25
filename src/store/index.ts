import { State } from "vue";
import { createStore, Store } from "vuex";

declare module "@vue/runtime-core" {
  // 声明自己的 store state
  interface State {
    token: string;
  }

  // 为 `this.$store` 提供类型声明
  // ComponentCustomProperties用于扩充组件实例类型以支持自定义全局属性
  interface ComponentCustomProperties {
    $store: Store<State>;
  }
}

export default createStore({
  state: {
    token: ''
  },
  getters: {
    getToken(state: State) {
      return state.token;
    },
  },
  // mutations只能同步执行
  mutations: {
    setToken(state: State, token: string) {
      state.token = token;
    },
  },
  actions: {
    setToken({ commit }, token: string) {
      commit("setToken", token);
    },
  },
  // 避免单个store过大，通过模块化将其分割
  modules: {},
});
