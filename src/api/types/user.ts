export interface GetUserParams {
  page: number;
  limit?: number;
  username?: string;
  role?: number;
  gender?: number;
}

export interface UserInfo {
  id: number;
  username: string;
  gender: 0 | 1 | 2;
  avatar: string;
  address: string;
  roles: string[];
}
