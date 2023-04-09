<script setup lang="ts">
import TaskComponent from './tasks.vue'
import DocumentationIcon from './icons/IconDocumentation.vue'
import { taskStore } from '../store/tasks/index'

const store = taskStore();
store
</script>

<template>
  <TaskComponent v-for="task in store.tasks" :key="task.action" :id="task._id" :task="task">
    <template #icon>
      <DocumentationIcon />
    </template>
    <template #heading>{{ task.title }}</template>
    <template #action>{{ task.action }}</template>

  </TaskComponent>
</template>
