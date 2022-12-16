import request from '@/server/request'
import { API_PREFIX } from '@/config'

export const getUserInfo = async (params: ObjectType): Promise<unknown> => {
  return await request.get(`${API_PREFIX}/m1/1328576-0-default/pet/1`, params)
}
