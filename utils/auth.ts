const KEY = 'pgcm-token'

// 获取指定的 cookie 值
export function getToken() {
  // return useCookie()
  return useCookie(KEY, {
    maxAge: 60 * 60 * 24 * 14
  })
}
