<template>
  <TitleBar />
  <router-view/>
</template>

<script>

import {inject} from "vue";
import TitleBar from "./components/modules/TitleBar";
export default {
  setup(){
    const store = inject('store');
  },
  components: {TitleBar}
}
</script>

<style>
html, body, #app{
  height: 100vh;
  width: 100vw;
  background-color: rgba(0,0,0,.05);
}
</style>