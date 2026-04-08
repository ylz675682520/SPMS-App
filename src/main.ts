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
  // 修改为你的线上后端 API 地址
  const rootUrl = 'https://192.168.1.195:8081/'

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
