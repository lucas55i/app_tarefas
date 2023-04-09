import type { CreateTask, Task } from '@/core/models/task'
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
    },

    async createTask(createTask: CreateTask) {
      return new Promise<void>((resolve, reject) => {
        taskService
          .createTask(createTask)
          .then((res) => {
            resolve(res.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    },

    async updateStatusTask(_id: string) {
      return new Promise<void>((resolve, reject) => {
        taskService
          .updateStatusTask(_id)
          .then((res) => {
            resolve(res.data)
            console.log(res)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
