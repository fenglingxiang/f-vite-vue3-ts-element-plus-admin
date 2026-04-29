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
  password: string;
}
