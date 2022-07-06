export interface Result<T = any> {
  code: number
  type: 'success' | 'error' | 'warning'
  message: string
  result: T
}

export interface UploadFile {
  data?: Recordable
  name?: string
  file: File | Blob
  filename?: string
  [key: string]: any
}
