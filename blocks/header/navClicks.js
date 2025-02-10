import { slideUp, slideDown } from '../../scripts/tools.js';

export const closeAllNavItems = (liObj, navArr) => {
    liObj.isActive = false;
    navArr.forEach((item) => {
      item.link.classList.remove('siteheader-nav-active');
      item.subnav.classList.remove('siteheader-nav-active');
      slideUp(item.subnav);
    });
};

export const navClicks = (liObj, navArr) => {
  if (liObj.isActive) {
    closeAllNavItems(liObj, navArr);
  } else {
    navArr.forEach((item) => {
      if (item.index === liObj.index) {
        liObj.isActive = true;
        item.link.classList.add('siteheader-nav-active');
        item.subnav.classList.add('siteheader-nav-active');
        slideDown(item.subnav);
      } else {
        item.isActive = false;
        item.link.classList.remove('siteheader-nav-active');
        item.subnav.classList.remove('siteheader-nav-active');
        slideUp(item.subnav);
      }
    });
  }
};
