import type { AxiosInstance } from 'axios'
import { buildHttpClient } from '../common/http-client'
import type { Task } from '../models/task'

class TaskService {
  private httpClient: AxiosInstance
  constructor() {
    const apiUrl = import.meta.env.VITE_API_TASKS as string
    this.httpClient = buildHttpClient(apiUrl)
  }

  async getAll(): Promise<Task[]> {
    return await this.httpClient.get('/v0/tarefas')
  }
}

const taskService = new TaskService()
export { taskService }
