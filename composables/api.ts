import Http from '../utils/request'

export const login = (data: any) => Http.post('/login', data)
