<script setup lang="ts">
  import TaskComponent from './tasks.vue'
  import DocumentationIcon from './icons/IconDocumentation.vue'
  import { taskStore } from '../store/tasks/index'
 
  const store = taskStore();
  store
</script>

<template>
    <TaskComponent v-for="task in store.tasks" :key="task.action">
      <template #icon>
        <DocumentationIcon />
      </template>
      <template #heading>{{ task.title }}</template>
      {{ task.action }}
    </TaskComponent>
</template>
