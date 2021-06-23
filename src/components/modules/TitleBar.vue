<template>
  <div id="title-bar" class="cursor-move bg-green-500 text-white">
    <div id="title" class="h-7 p-1 leading-0">
      &nbsp;🔥 Host Manager - v2.0.0 <span id="active"></span>
    </div>

    <div id="title-bar-btns" class="absolute top-0 right-0">
      <button @click="minimize" class="h-7 w-11 hover:bg-green-400 focus:outline-none outline-none">➖</button>
      <button @click="maximize" class="h-7 w-11 hover:bg-green-400 focus:outline-none outline-none">⬛</button>
      <button @click="close" class="h-7 w-11 hover:bg-red-400 cursor-pointer">❌</button>
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
      win.close();
    }
    const minimize = () => {
      let win = remote.getCurrentWindow();
      win.minimize();
    }
    const restore = () => {
      let win = remote.getCurrentWindow();
      win.restore();
    }
    const maximize = () => {
      let win = remote.getCurrentWindow();
      win.maximize();
    }
    return {
      close, minimize, maximize, restore
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