import type { HttpStatusCode } from 'axios';

export interface ApiResponseData<T> {
  code: HttpStatusCode;
  data: T;
  msg: string;
}
