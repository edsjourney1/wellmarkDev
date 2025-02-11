import { slideUp, slideDown } from '../../scripts/tools.js';

const activeCls = 'siteheader-active';

export const closeAllNavItems = (navArr, navMaskEl) => {
  navArr.forEach((item) => {
    item.isActive = false;
    item.link.classList.remove(activeCls);
    item.subnav.classList.remove(activeCls);
    slideUp(item.subnav);
    navMaskEl.classList.remove('siteheader-nav-mask-active');
  });
};

export const navClicks = (liObj, navArr, navMaskEl) => {
  if (liObj.isActive) {
    closeAllNavItems(navArr, navMaskEl);
  } else {
    navArr.forEach((item) => {
      if (item.index === liObj.index) {
        liObj.isActive = true;
        item.link.classList.add(activeCls);
        item.subnav.classList.add(activeCls);
        slideDown(item.subnav);
        navMaskEl.classList.add('siteheader-nav-mask-active');
      } else {
        item.isActive = false;
        item.link.classList.remove(activeCls);
        item.subnav.classList.remove(activeCls);
        slideUp(item.subnav);
      }
    });
  }
};
