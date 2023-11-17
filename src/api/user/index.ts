import { http } from '@/utils/request'
import type {
  LoginData,
  LoginResult,
  LoginStatusResult,
  LogoutResult,
  RegisterData,
  UserInfoResult
} from './types'

/**
 * 登录
 */
export function loginApi(data: LoginData) {
  return http.post<LoginResult>('/user/login', data)
}

/**
 * 注册
 */
export function registerApi(data: RegisterData) {
  return http.post<LoginResult>('/user/register', data)
}

/**
 * 检查用户登录状态
 */
export function checkLoginStatusApi() {
  return http.get<LoginStatusResult>('/user/check_login')
}

/**
 * 获取登录用户信息
 */
export function getUserInfoApi() {
  return http.get<{ userInfo: UserInfoResult }>('/user/info')
}

/**
 * 获取用户列表
 */
export function getUserListApi() {
  return http.get<UserInfoResult[]>('/contact/list')
}

/**
 * 登出logout
 */

export function logoutApi() {
  return http.post<LogoutResult>('/user/logout')
}
