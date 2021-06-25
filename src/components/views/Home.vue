<template>
  <Resizable>
    <div v-for="(group, name) in store.state.groups">
      <div class="group flex">
        <div class="togglepx1">></div>
        <div class="checkbox px-1">
          <input type="checkbox">
        </div>
        <div class="group_name px-1">
          {{ name }}
          <div v-for="(ip_data, ip) in group">
            <div class="ips flex">
              <div class="togglepx1">></div>
              <div class="group_name px-1">
                {{ ip }}
                <div v-for="domain in ip_data">
                  <div class="ips flex">
                    <div class="group_name px-4">
                      {{ domain }}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </Resizable>
</template>

<script>
import Resizable from '@/components/modules/Resizable'
import {inject} from "vue";

export default {
  name: "Home",
  setup() {
    const store = inject('store');
    return {
      store
    }
  },
  components: {Resizable}
}
</script>