import { Recordable } from 'vite-plugin-mock'

export function resultSuccess<T = Recordable>(result: T, { message = 'ok' } = {}) {
  return {
    code: 0,
    result,
    message,
    type: 'success'
  }
}

export interface requestParams {
  method: string
  body: any
  headers?: { authorization?: string }
  query: any
}

export function resultError(message = 'Request failed', { code = -1, result = null } = {}) {
  return {
    code,
    result,
    message,
    type: 'error'
  }
}

export function getRequestToken({ headers }: requestParams): string | undefined {
  return headers?.authorization
}
