import { navClicks, closeAllNavItems } from './navClicks.js';
const activeCls = 'siteheader-active';

export const addEvents = (thisBlock, navMaskEl, searchMaskEl) => {
  const loginWrapEl = thisBlock.querySelector('.siteheader-login-wrapper-cta');
  const loginCtaEl = loginWrapEl?.querySelector('button');
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
    if (searchParent.classList.contains('siteheader-search-inner-active')) {
      searchCtaEl.classList.remove('siteheader-search-inner-active');
      searchParent.classList.remove('siteheader-search-inner-active');
      searchMaskEl.classList.remove('siteheader-search-mask-active');
    } else {
      searchCtaEl.classList.add('siteheader-search-inner-active');
      searchParent.classList.add('siteheader-search-inner-active');
      searchMaskEl.classList.add('siteheader-search-mask-active');
    }
  });

  const navEl = thisBlock.querySelector('.siteheader-mobile-wrapper > nav');
  const navArr = [];

  loginCtaEl?.addEventListener('click', () => {
    if (loginWrapEl.classList.contains('siteheader-login-wrapper-cta-active')) {
      loginWrapEl.classList.remove('siteheader-login-wrapper-cta-active');
    } else {
      loginWrapEl.classList.add('siteheader-login-wrapper-cta-active');
      closeAllNavItems(navArr, navMaskEl);
    }
  });

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
    if (searchCtaEl.classList.contains('siteheader-search-inner-active')) {
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
};
