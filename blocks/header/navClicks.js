import { slideUp, slideDown } from '../../scripts/tools.js';
import { closeAllBlogMenuItems } from './formBlogMenu.js';

const activeCls = 'siteheader-active';

export const closeAllNavItems = (navArr, navMaskEl) => {
  navArr.forEach((item) => {
    item.isActive = false;
    item.link.classList.remove(activeCls);
    item.subnav.classList.remove(activeCls);
    slideUp(item.subnav, 150);
    navMaskEl.classList.remove('siteheader-active');
  });
};

export const navClicks = (liObj, navArr, navMaskEl) => {
  if (liObj.isActive) {
    closeAllNavItems(navArr, navMaskEl);
  } else {
    navArr.forEach((item) => {
      if (item.index === liObj.index) {
        closeAllBlogMenuItems();
        liObj.isActive = true;
        item.link.classList.add(activeCls);
        item.subnav.classList.add(activeCls);
        slideDown(item.subnav, 150);
        navMaskEl.classList.add('siteheader-active');
      } else {
        item.isActive = false;
        item.link.classList.remove(activeCls);
        item.subnav.classList.remove(activeCls);
        slideUp(item.subnav, 150);
      }
    });
  }
};
