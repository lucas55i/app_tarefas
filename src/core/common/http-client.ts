import axios, { type AxiosInstance } from 'axios'

const buildHttpClient = (baseUrl: string): AxiosInstance => {
  const httpClient = axios.create({
    baseURL: baseUrl,
    timeout: 3000
  })

  httpClient.interceptors.response.use((response) => {
    if (response.status === 401 || response.status === 403) {
      location.reload()
    }
    return response.data
  })
  return httpClient
}

const baseURL = import.meta.env.VITE_API_TASKS as string
const client = buildHttpClient(baseURL)
export default client

export { buildHttpClient }
