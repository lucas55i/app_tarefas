import type { AxiosInstance } from 'axios'
import { buildHttpClient } from '../common/http-client'
import type { CreateTask, Task } from '../models/task'

class TaskService {
  private httpClient: AxiosInstance
  constructor() {
    const apiUrl = import.meta.env.VITE_API_TASKS as string
    this.httpClient = buildHttpClient(apiUrl)
  }

  async getAll(): Promise<Task[]> {
    return await this.httpClient.get('/v0/tarefas')
  }

  async createTask(creatTask: CreateTask) {
    return await this.httpClient.post('/v0/tarefas', creatTask)
  }

  async updateStatusTask(_id: string) {
    return await this.httpClient.put(`/v0/tarefas/${_id}`,)
  }
}

const taskService = new TaskService()
export { taskService }
