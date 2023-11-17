/**
 * 登录接口参数类型
 */
export interface LoginData {
  email: string
  password: string
}

/**
 * 注册接口参数类型
 */
export interface RegisterData {
  email: string
  username: string
  password: string
  checkPassword: string
}

/**
 * 登录接口返回值类型
 */
export interface LoginResult {
  token: string
}

/**
 * 登录状态接口返回值类型
 */
export interface LoginStatusResult {
  is_login: boolean
}

/**
 * 用户信息接口返回值类型
 */
export interface UserInfoResult {
  id: string
  email: string
  username: string
  avatar: string
  desc: string
  phone: string
}

/**
 * 登出返回值
 */

export interface LogoutResult {
  success: boolean
}
