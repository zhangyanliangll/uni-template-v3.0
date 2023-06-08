import { WebViewConfigKeysType } from '@/typings/web-view';

export type navigateOptionsType = string | any

export type NavigateGoOptionsType = {
  url: string
  query?: Record<string, any>
}

export type NavigateGoOptionsH5Type = {
  isH5: boolean
  key: WebViewConfigKeysType
  query?: Record<string, any>
}

export type NavigateGoType = 'redirect' | 'reLaunch'

export type ToastOptionsType = {
  title: string
  icon?: string
  duration?: string | number
}

export interface UseBaseComponent {
  toast: (options: string | ToastOptionsType) => Promise<unknown>
  modal: (options: string | any) => Promise<unknown>
  navigateGo: (options: NavigateGoOptionsType | NavigateGoOptionsH5Type | string | number, type?: NavigateGoType) => void
}
