<template>
  <Resizable />
</template>

<script>
import Resizable from '@/components/modules/Resizable'
export default {
  name: "Home",
  components: {Resizable}
}
</script>

<style scoped>
#explorer{
  resize: both;
}
</style>