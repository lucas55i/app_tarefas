import type { Task } from '@/core/models/task'
import { defineStore } from 'pinia'
import { taskService } from '@/core/services/task-service'

interface TaskState {
  tasks: Task[]
}

export const taskStore = defineStore({
  id: 'task',
  state: (): TaskState => ({
    tasks: []
  }),

  actions: {
    async getAll() {
      return new Promise<void>((resolve, reject) => {
        taskService
          .getAll()
          .then((result) => {
            // resolve();
            this.tasks = result
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
