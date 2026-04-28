import service from '@/utils/axios';
import type { GetUserParams, UserInfo } from '@/api/types/user';

export const getUser = (data: GetUserParams) => {
  return service<UserInfo>({
    url: '/user/getUser',
    method: 'GET',
    data,
  });
};
