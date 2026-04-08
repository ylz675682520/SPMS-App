import '@airpower/assets/css/airpower.scss'

import { createSSRApp } from 'vue'
import { AirConfig } from '@airpower/config/AirConfig'
import { AirApi } from '@airpower/config/AirApi'
import App from './App.vue'
import '@/static/css/main.scss'

const system = uni.getSystemInfoSync()

if (system.uniPlatform !== 'web') {
  const rootUrl = 'http://10.0.0.4:8080/'

  AirConfig.apiUrl = `${rootUrl}`
  AirConfig.staticUrl = `${rootUrl}upload/`
} else {
  // 使用 Vite 代理转发，避免 HTTPS 页面访问 HTTP 后端导致的混合内容问题
  // const rootUrl = '/backend/'

  //AirConfig.apiUrl = `${rootUrl}`
  //AirConfig.staticUrl = `${rootUrl}upload/`
  const rootUrl = 'http://192.168.88.195:8081/'

  AirConfig.apiUrl = `${rootUrl}`
  AirConfig.staticUrl = `${rootUrl}upload/`
}

AirConfig.login = () => {
  AirApi.redirect('/view/login')
}

// noinspection JSUnusedGlobalSymbols
export function createApp() {
  const app = createSSRApp(App)

  return {
    app,
  }
}
