<script lang="ts">
import { taskStore } from '@/store/tasks';
import TaskComponent from '../components/TaskComponents.vue'
import type { Task } from '@/core/models/task';

export default {
  components: { TaskComponent },
  setup() {
    const userStore = taskStore()
    return {
      userStore
    }
  },
  data() {
    return {
    }
  },
  methods: {},
}
</script>

<template>
  <span>
    <TaskComponent :tasks="userStore.tasks" />
  </span>
</template>
