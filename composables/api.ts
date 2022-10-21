import Http from '../utils/request'

export const login = (data: any) => Http.post('/login', data)

export const getDictForType = (type: number) => Http.get(`/dict/query/type?type=${type}`)
