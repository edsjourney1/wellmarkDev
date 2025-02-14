import { slideUp, slideDown } from '../../scripts/tools.js';
import { closeAllNavItems } from './navClicks.js';

export const loginEventFn = (loginCtaEl, loginCtaWrapEl, loginWrapEl, navArr, navMaskEl, loginMaskEl) => {
  loginCtaEl?.addEventListener('click', () => {
    if (loginCtaWrapEl.classList.contains('siteheader-active')) {
      loginCtaWrapEl.classList.remove('siteheader-active');
      loginMaskEl.classList.remove('siteheader-active');
      slideUp(loginWrapEl, 100);
    } else {
      loginCtaWrapEl.classList.add('siteheader-active');
      loginMaskEl.classList.add('siteheader-active');
      // await new Promise(resolve => setTimeout(resolve, 250));
      slideDown(loginWrapEl, 100);
      closeAllNavItems(navArr, navMaskEl);
    }
  });
};
