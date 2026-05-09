import type { HttpStatusCode } from 'axios';

export interface ApiResponseData<T> {
  code: HttpStatusCode;
  data: T;
  msg: string;
}

export interface PaginationData<T> {
  page: number;
  limit: number;
  total: number;
  list: T[];
  totalPage: number;
}
