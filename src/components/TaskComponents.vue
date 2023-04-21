<script lang="ts">
import type { Task } from '@/core/models/task'
import { taskStore } from '../store/tasks/index'
import DocumentationIcon from './icons/IconDocumentation.vue'

export default {
  setup() {
    const userStore = taskStore()
    return {
      userStore
    }
  },
  props: {
    tasks: {
      type: Array<Task>,
      required: true
    },
  },
  data() {
    return {
      editTask: {} as Task
    }
  },
  methods: {
    mudaStatus(id: string) {
      this.editTask.done = true
      console.log(id);
      this.userStore.updateStatusTask(id, this.editTask)
    }
  },
  components: { DocumentationIcon },
}
</script>

<template>
  <div class="item" :tasks="tasks" v-for="task in tasks" :key="task.action">
    <i @click="mudaStatus(task._id)">
      <DocumentationIcon />
    </i>
    <div class="details">
      <h3>
        {{ task.title }}
      </h3>
      <p>
        {{ task.action }}
      </p>
    </div>
  </div>
</template>
<style scoped>
.item {
  margin-top: 2rem;
  display: flex;
}

.details {
  flex: 1;
  margin-left: 1rem;
}

i {
  display: flex;
  place-items: center;
  place-content: center;
  color: var(--color-text);
}

h3 {
  font-size: 1.2rem;
  font-weight: 500;
  margin-bottom: 0.4rem;
  color: var(--color-heading);
}

p {
  font-size: 0.9rem;
}

@media (min-width: 1024px) {
  .item {
    margin-top: 0;
    padding: 0.3rem 3rem 1rem;
  }

  i {
    top: calc(50% - 25px);
    left: -26px;
    position: absolute;
    border: 1px solid var(--color-border);
    background: var(--color-background);
    border-radius: 8px;
    width: 50px;
    height: 50px;
  }

  .item:before {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    bottom: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:after {
    content: ' ';
    border-left: 1px solid var(--color-border);
    position: absolute;
    left: 0;
    top: calc(50% + 25px);
    height: calc(50% - 25px);
  }

  .item:first-of-type:before {
    display: none;
  }

  .item:last-of-type:after {
    display: none;
  }
}
</style>
