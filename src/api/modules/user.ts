import service from '@/utils/axios';
import type { GetUserParams, UserInfo } from '@/api/types/user';
import type { PaginationData } from '../common';

export const getUserList = (data: GetUserParams) => {
  return service<PaginationData<UserInfo>>({
    url: '/user/getUserList',
    method: 'GET',
    data,
  });
};
