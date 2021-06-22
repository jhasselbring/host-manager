<template>
  <div id="title-bar" class="cursor-move bg-green-500 text-white p-1 h-9">
    <div id="title">
      &nbsp;🔥 Host Manager - v2.0.0 <span id="active"></span>
    </div>

    <div id="title-bar-btns" class="absolute top-1 right-1">
      <button @click="min" class="purple">➖</button>
      <button @click="close" class="purple  cursor-pointer">❌</button>
    </div>
  </div>
</template>

<script>
import {remote} from "electron";

export default {
  name: "TitleBar",
  setup() {

    const close = () => {
      let win = remote.getCurrentWindow();
      console.log(win);
      win.close();
    }
    const min = () => {
      // this.$parent.toggleBody();
    }
    return {
      close, min
    }
  }
}
</script>
<style scoped lang="scss">
#title-bar {
  -webkit-app-region: drag;

  #title-bar-btns {
    -webkit-app-region: no-drag;
  }
}
</style>