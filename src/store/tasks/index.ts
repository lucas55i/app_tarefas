import type { CreateTask, Task, UpdateStatusTask } from '@/core/models/task'
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

    async deleteTask(_id: string) {
      return new Promise<void>((resolve, reject) => {
        taskService
          .deleteTask(_id)
          .then((res) => {
            resolve(res.data)
          })
          .catch((err) => {
            reject(err)
          })
      })
    }
  }
})
