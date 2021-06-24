<template>
  <div id="title-bar" class="cursor-move bg-green-500 text-white">
    <div id="title" class="h-7 p-1 leading-0">
      &nbsp;🔥 Host Manager - v2.0.0 <span id="active"></span>
    </div>

    <div id="title-bar-btns" class="absolute top-0 right-0">
      <button @click="minimize" class="h-7 w-11 hover:bg-green-400 focus:outline-none outline-none">
        <img src="/ui/Minimize.png" alt="">
      </button>
      <button v-if="data.isMaximized" @click="restore" class="h-7 w-11 hover:bg-green-400 focus:outline-none outline-none">
        <img src="/ui/Restore.png" alt="">
      </button>
      <button v-else @click="maximize" class="h-7 w-11 hover:bg-green-400 focus:outline-none outline-none">
        <img src="/ui/maximize.png" alt="">
      </button>
      <button @click="close" class="h-7 w-11 hover:bg-red-400 focus:outline-none outline-none">
        <img src="/ui/Close.png" alt="">
      </button>
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue';
export default {
  name: "TitleBar",
  setup() {
    let data = reactive({
      isMaximized: false
    });
    const close = () => {
      win.close();
    }
    const minimize = () => {
      win.minimize();
    }
    const restore = () => {
      win.unmaximize();
      data.isMaximized = false;
    }
    const maximize = () => {
      win.maximize();
      data.isMaximized = true;
    }
    return {
      close, minimize, maximize, restore,
      data
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