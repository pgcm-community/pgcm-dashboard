// import axios from 'axios'
// import type { Result, UploadFile } from '@/axios'
import { ref } from 'vue'
import { _AsyncData } from 'nuxt/dist/app/composables/asyncData'
import { useFetch, useNuxtApp } from 'nuxt/app'

const request = (url: string, options?: any): Promise<any> => {
  // const { $config, $router } = useNuxtApp()
  // const reqUrl = $config.baseURL + url
  const reqUrl = url
  console.log(options);

  return new Promise((resolve, reject) => {
    useFetch(reqUrl, { ...options })
      .then(({ data, error }: _AsyncData<any, any>) => {
        if (error.value) {
          reject(error.value)
          return
        }
        const value = data.value
        const result = value && value.data
        if (!result || value.code !== 1) {
          // 错误回调
          resolve(ref<any>(result))
          // $router.replace('/reject/' + value.status)
        } else {
          resolve(ref<any>(options.method === 'get' ? result : value))
        }
      })
      .catch((err: any) => {
        console.log(err)
        reject(err)
      })
  })
}

export default new (class Http {
  get(url: string, params?: any): Promise<any> {
    return request(url, { method: 'get', params })
  }

  post(url: string, body?: any): Promise<any> {
    return request(url, { method: 'post', body })
  }

  put(url: string, body?: any): Promise<any> {
    return request(url, { method: 'put', body })
  }

  delete(url: string, body?: any): Promise<any> {
    return request(url, { method: 'delete', body })
  }
})()
