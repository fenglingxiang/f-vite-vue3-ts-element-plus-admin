export interface MenuItemType {
  title: string;
  key: string;
  icon?: unknown;
  children?: MenuItemType[];
}
