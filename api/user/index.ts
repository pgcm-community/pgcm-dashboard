import Request from '@/utils/request'

enum Api {
  Login = '/user/login',
  Logout = '/user/logout',
  GetUserInfo = '/user/getUserInfo'
}
interface LoginParams {
  username: string
  password: string
}

export function login(params: LoginParams) {
  return Request.post(Api.Login, params)
}

export function getUserInfo() {
  return Request.get(Api.GetUserInfo)
}

export function logout() {
  return Request.get(Api.Logout)
}

// 测试本地 mock
export function articleMoudleList(params: any) {
  return Request.get('/article/module/list', params)
}
