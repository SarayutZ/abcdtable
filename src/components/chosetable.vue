<template>
  <div class="text-center">
    <h2 class="mt-3 badge rounded-pill text-bg-danger fs-2">{{ item }}</h2>
  </div>
<TableC/>
</template>

<script>
import TableC from "./TableC.vue";
import { ref, defineProps } from 'vue';

export default {
  props: {
    item: String, // Define the item prop
    travelList: Array, // Define the travelList prop
  
  },
  components: {
    TableC
  }
}
</script>

<style scoped>
/* Add your component-specific styles here if needed */
</style>
