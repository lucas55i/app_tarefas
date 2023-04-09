export interface Task {
  _id:string | null
  title: string
  action: string
  done: boolean
}

export interface CreateTask {
  title: string
  action: string
  done: boolean
}

export interface UpdateStatusTask {
  done: boolean
}
