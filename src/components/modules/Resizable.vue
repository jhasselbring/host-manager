<template>
  <div class="flex resizable" :style="{width: data.width + 'px'}">
    <div class="content bg-gray-700 text-white">
      <slot/>
    </div>
    <div v-on:drag="onDrag"
         v-on:mousedown="onMouseDown"
         draggable="true"
         class="resizer cursor-resize" style="border: 1px solid rgba(0,0,0, 0.1); height:100%">
    </div>
  </div>
</template>

<script>
import {reactive} from 'vue';

export default {
  name: "Resizable",
  setup() {
    let data = reactive({
      startWidth: null,
      width: 300,
      startX: null,
    });

    const onMouseDown = (e) => {
      console.log(e);
      data.startX = e.clientX;
      data.startWidth = data.width;
    }
    const onDrag = (e) => {
      console.log('Drag', e.clientX);
      if (e.clientX > 10) {
        let width = data.startWidth + (e.clientX - data.startX);
        data.width = width
      }
    }
    return {
      data,
      onMouseDown,
      onDrag,
    }
  }
}
</script>

<style lang="scss" scoped>
.resizable {
  height: calc(100% - 28px);

  & > .content {
    width: 100%
  }

  & > .resizer {
    cursor: col-resize;
    height: 100%
  }
}

</style>