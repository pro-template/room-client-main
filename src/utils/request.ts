/**
 * 拦截器
 */
import axios, { type AxiosInstance } from 'axios'
import type { AxiosRequestConfig } from 'axios'
import { ElNotification } from 'element-plus'
import router from '@/router'

export interface Result<T = any> {
  code: number
  message: string
  data: T
}

const service: AxiosInstance = axios.create({
  baseURL: 'https://ddns.reachable.cool:3000',
  timeout: 3000
})

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token')
    if (token) {
      config.headers.Authorization = token
    }
    return config
  },
  (error) => {
    Promise.reject(new Error(error.message))
    return Promise.reject(error)
  }
)

service.interceptors.response.use(
  (response) => {
    const { code, message, data } = response.data
    if (code === 0) {
      return data
    } else {
      // 处理业务错误。
      ElNotification({ type: 'error', title: '错误', message: message })
      return Promise.reject(new Error(message))
    }
  },
  (error) => {
    // 处理HTTP网络错误
    let message = ''
    const status = error.response?.status
    switch (status) {
      case 401:
        message = 'token 失效，请重新登录'
        router.push('/login')
        break
      case 403:
        message = '拒绝访问'
        break
      case 404:
        message = '请求地址出错'
        break
      case 500:
        message = '服务器内部错误'
        break
      default:
        message = '网络链接故障'
    }
    ElNotification({ type: 'error', title: '错误', message: message })
    return Promise.reject(error)
  }
)

export const http = {
  get<T = any>(url: string, params?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.request({ url, method: 'get', ...config, params })
  },
  post<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.post(url, data, config)
  },
  put<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.put(url, data, config)
  },
  delete<T = any>(url: string, data?: object, config?: AxiosRequestConfig): Promise<T> {
    return service.request({ url, method: 'delete', ...config, data })
  }
}
