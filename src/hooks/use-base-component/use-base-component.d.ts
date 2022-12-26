export type navigateOptionsType = string | any

export type NavigateGoOptionsType = {
  url: string
  query?: Record<string, unknown>
} | string | number

export type NavigateGoType = 'redirect' | 'reLaunch'

export type ToastOptionsType = {
  title: string
  icon?: string
  duration?: string | number
}

export interface UseBaseComponent {
  toast: (options: string | ToastOptionsType) => Promise<unknown>
  modal: (options: string | any) => Promise<unknown>
  navigateGo: (options: NavigateGoOptionsType, type?: NavigateGoType) => void
}
