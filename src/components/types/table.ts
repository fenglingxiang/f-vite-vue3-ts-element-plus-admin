import type { TableColumnCtx } from 'element-plus';
import type { ColumnRenderFunction } from '../FTable/Render';

export type TableColumn<T> = Partial<TableColumnCtx> & {
  prop: keyof T & string;
  label: string;
  render?: ColumnRenderFunction<T>;
};

export interface Pagination {
  currentPage?: number;
  pageSize?: number;
  size?: 'large' | 'default' | 'small';
  total?: number;
  disabled?: boolean;
  pageSizes: number[];
}
