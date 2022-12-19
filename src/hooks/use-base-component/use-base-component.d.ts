export type navigateOptionsType = string | any

export type NavigateGoOptionsType = {
  url: string
  data?: Record<string, unknown>
} | string | number

export type ToastOptionsType = {
  title: string
  icon: string
  duration?: string | number
}

export interface UseBaseComponent {
  toast: (options: string | ToastOptionsType) => Promise<unknown>
  modal: (options: string | any) => Promise<unknown>
  navigateGo: (options: NavigateGoOptionsType, redirect?: boolean) => void
}
