<script  lang="ts">
import AddFormTask from '../components/FormAddTask.vue'
export default {

  data() {
    return {}
  },
  components: { AddFormTask },
  methods: {}
}
</script>

<template>
  <div class="form-component">
    <AddFormTask></AddFormTask>
  </div>
</template>

<style scoped>
.form-component {
  width: 100%;
  align-items: start;
}
</style>
