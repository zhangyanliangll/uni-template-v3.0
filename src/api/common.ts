import request from '@/server/request'

export const getUserInfo = async (params: ObjectType): Promise<unknown> => {
  return await request.get('/m1/1328576-0-default/pet/1', params)
}
