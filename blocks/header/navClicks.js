import { slideUp, slideDown } from '../../scripts/tools.js';

export const closeAllNavItems = (navArr, navMaskEl) => {
  navArr.forEach((item) => {
    item.isActive = false;
    item.link.classList.remove('siteheader-nav-active');
    item.subnav.classList.remove('siteheader-nav-active');
    slideUp(item.subnav);
    navMaskEl.classList.remove('siteheader-mask-active');
  });
};

export const navClicks = (liObj, navArr, navMaskEl) => {
  if (liObj.isActive) {
    closeAllNavItems(navArr, navMaskEl);
  } else {
    navArr.forEach((item) => {
      if (item.index === liObj.index) {
        liObj.isActive = true;
        item.link.classList.add('siteheader-nav-active');
        item.subnav.classList.add('siteheader-nav-active');
        slideDown(item.subnav);
        navMaskEl.classList.add('siteheader-mask-active');
      } else {
        item.isActive = false;
        item.link.classList.remove('siteheader-nav-active');
        item.subnav.classList.remove('siteheader-nav-active');
        slideUp(item.subnav);
      }
    });
  }
};
