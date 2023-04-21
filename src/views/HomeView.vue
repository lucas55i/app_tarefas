<script lang="ts">
import { taskStore } from '@/store/tasks';
import TaskComponent from '../components/TaskComponents.vue'

export default {
  components: { TaskComponent },
  setup() {
    const userStore = taskStore()
    return {
      userStore
    }
  },
  methods: {
    getTaskCompleted() {
      return this.userStore.tasks.filter((ta) => ta.done === false).map((p) => p.done)
    }
  }
}
</script>

<template>
  <span>
    <TaskComponent :tasks="userStore.tasks" />
  </span>
  <span>
    <TaskComponent :tasks="userStore.tasks" />
  </span>
</template>
