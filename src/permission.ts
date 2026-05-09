import router from '@/router';
import { usePermissionHook } from '@/store/modules/permission';
const { setMenus } = usePermissionHook();

router.beforeEach(() => {
  console.log('🚀 ~ permission.ts ~ beforeEach:', '路由前置守卫');

  setMenus();
  return true;
});
