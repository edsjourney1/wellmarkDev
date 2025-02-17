import { slideUp, slideDown } from '../../scripts/tools.js';
import { closeAllNavItems } from './navClicks.js';
import { closeAllBlogMenuItems } from './formBlogMenu.js';

const activeCls = 'siteheader-active';

const loginEventFn = (
  loginCtaEl,
  loginCtaWrapEl,
  loginWrapEl,
  navArr,
  navMaskEl,
  loginMaskEl,
) => {
  loginCtaEl?.addEventListener('click', () => {
    if (loginCtaWrapEl.classList.contains(activeCls)) {
      loginCtaWrapEl.classList.remove(activeCls);
      loginMaskEl.classList.remove(activeCls);
      loginCtaWrapEl.closest('.siteheader-login-wrapper').classList.remove(activeCls);
      slideUp(loginWrapEl, 175);
    } else {
      loginCtaWrapEl.classList.add(activeCls);
      loginMaskEl.classList.add(activeCls);
      loginCtaWrapEl.closest('.siteheader-login-wrapper').classList.add(activeCls);
      closeAllBlogMenuItems();
      slideDown(loginWrapEl, 175);
      closeAllNavItems(navArr, navMaskEl);
    }
  });
};

export default loginEventFn;
