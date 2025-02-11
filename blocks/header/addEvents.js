import { loginEventFn } from './loginEvents.js';
import { navClicks, closeAllNavItems } from './navClicks.js';
const activeCls = 'siteheader-active';

export const addEvents = (thisBlock, navMaskEl, searchMaskEl, loginMaskEl) => {
  const loginCtaWrapEl = thisBlock.querySelector('.siteheader-login-wrapper-cta');
  const loginCtaEl = loginCtaWrapEl?.querySelector('button');
  const loginWrapEl = thisBlock.querySelector('.siteheader-login-wrapper-outer');

  const navCtaEl = thisBlock.querySelector(
    '.siteheader-mobile-wrapper > button'
  );
  const searchParent = document.querySelector(
    '.siteheader-search-wrapper > .siteheader-search-inner'
  );
  const searchCtaEl = document.querySelector(
    '.siteheader-search-wrapper > button'
  );

  searchCtaEl.addEventListener('click', () => {
    if (navCtaEl.classList.contains(activeCls)) {
      navCtaEl.dispatchEvent(new MouseEvent('click'));
    }
    if (searchParent.classList.contains('siteheader-active')) {
      searchCtaEl.classList.remove('siteheader-active');
      searchParent.classList.remove('siteheader-active');
      searchMaskEl.classList.remove('siteheader-search-mask-active');
    } else {
      searchCtaEl.classList.add('siteheader-active');
      searchParent.classList.add('siteheader-active');
      searchMaskEl.classList.add('siteheader-search-mask-active');
    }
  });

  const navEl = thisBlock.querySelector('.siteheader-mobile-wrapper > nav');
  const navArr = [];

  const l0Links = Array.from(
    thisBlock.querySelectorAll('.siteheader-has-subnav')
  );
  l0Links.forEach((link, index) => {
    navArr.push({
      index,
      isActive: false,
      link,
      subnav: link.nextElementSibling,
    });
  });
  navArr.forEach((liObj) => {
    liObj.link.addEventListener('click', (event) => {
      event.preventDefault();
      navClicks(liObj, navArr, navMaskEl);
    });
  });

  navCtaEl?.addEventListener('click', () => {
    if (searchCtaEl.classList.contains('siteheader-active')) {
      searchCtaEl.dispatchEvent(new MouseEvent('click'));
    }
    if (navCtaEl.classList.contains(activeCls)) {
      navCtaEl.classList.remove(activeCls);
      navEl.classList.remove(activeCls);
      closeAllNavItems(navArr, navMaskEl);
    } else {
      navCtaEl.classList.add(activeCls);
      navEl.classList.add(activeCls);
    }
  });

  loginEventFn(loginCtaEl, loginCtaWrapEl, loginWrapEl, navArr, navMaskEl, loginMaskEl);
};
