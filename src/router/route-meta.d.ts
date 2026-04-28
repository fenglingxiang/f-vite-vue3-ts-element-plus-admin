import 'vue-route';

declare module 'vue-route' {
  interface RouteMeta {
    icon?: Component | string;
    title: string;
    showRoot?: boolean; //是否只显示根路由
    activeMenu?: string; //当前激活菜单
  }
}
