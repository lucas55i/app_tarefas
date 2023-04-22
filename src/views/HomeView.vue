<script lang="ts">
import { taskStore } from '@/store/tasks';
import TaskComponent from '../components/TaskComponents.vue'
import AddTask from '../components/AddTask.vue'


export default {
  components: { TaskComponent, AddTask },
  setup() {
    const userStore = taskStore()
    async function getAllTasks() {
      await userStore.getAll()
    }
    return {
      userStore,
      getAllTasks
    }
  },
  data() {
    return {
    }
  },
  created() {
    this.getAllTasks()
  },
}
</script>

<template>
  <header>
    <AddTask @taskAded="getAllTasks()"></AddTask>
  </header>
  <span>
    <TaskComponent :tasks="userStore.tasks" @taskUpdated="getAllTasks()" />
  </span>
</template>
