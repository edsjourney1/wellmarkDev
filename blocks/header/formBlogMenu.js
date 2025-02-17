import { slideUp, slideDown } from '../../scripts/tools.js';

const liBlogMenuArr = [];
const activeCls = 'siteheader-blog-has-subnav-active';
const bodyEl = document.querySelector('body');

export const closeAllBlogMenuItems = () => {
  liBlogMenuArr.forEach((item) => {
    item.isActive = false;
    item.link.classList.remove(activeCls);
    slideUp(item.subnav, 175);
    item.link.closest('nav .siteheader-blog-menu > ul').classList.remove(activeCls);
  });
};

const initiateBlogSubnav = () => {
  liBlogMenuArr.forEach((item) => {
    item.link.addEventListener('click', (event) => {
      event.preventDefault();
      if (item.isActive) {
        closeAllBlogMenuItems();
      } else {
        liBlogMenuArr.forEach((item2) => {
          if (item2.index === item.index) {
            item2.isActive = true;
            item2.link.classList.add(activeCls);
            slideDown(item2.subnav, 175);
          } else {
            item2.isActive = false;
            item2.link.classList.remove(activeCls);
            slideUp(item2.subnav, 175);
          }
        });
        item.link.closest('nav .siteheader-blog-menu > ul').classList.add(activeCls);
      }
    });
  });
};

const attachBlogMenuEvents = (headerSection, bottomColorEl) => {
  const navBtn = headerSection.querySelector('.siteheader-blog-nav-toggle > button');
  const navParent = headerSection.querySelector('.siteheader-blog-menu');
  const liItems = Array.from(headerSection.querySelectorAll('nav > div > ul > li'));

  liItems.forEach((li, index) => {
    if (li.querySelector('ul')) {
      if (bottomColorEl.innerHTML.length) {
        li.querySelector('ul').style.backgroundColor = bottomColorEl.innerHTML;
      }
      const l0ElSpan = document.createElement('span');
      l0ElSpan.className = 'icon icon-solid--chevron-down';
      l0ElSpan.innerHTML = '<i class="fa-solid fa-chevron-down" data-icon-name="solid--chevron-down"></i>';

      const currentLink = li.querySelector(':scope > a');
      currentLink.append(l0ElSpan);
      currentLink.classList.add('siteheader-blog-has-subnav');

      liBlogMenuArr.push({
        link: currentLink,
        subnav: li.querySelector(':scope > ul'),
        index,
        isActive: false,
      });
    }
  });

  initiateBlogSubnav();

  const allHeaderSectionEl = Array.from(headerSection.querySelectorAll('*'));

  if (navBtn && navParent && liItems.length) {
    navBtn.addEventListener('click', () => {
      if (headerSection.classList.contains('siteheader-blog-menu-active')) {
        headerSection.classList.remove('siteheader-blog-menu-active');
        slideUp(navParent, 175);
        bodyEl.classList.remove('siteheader-blog-nav-active');
        setTimeout(() => {
          allHeaderSectionEl.forEach((el) => {
            if (el.getAttribute('style')?.length > 0) {
              el.style.display = '';
            }
          });
        }, 300);
      } else {
        headerSection.classList.add('siteheader-blog-menu-active');
        bodyEl.classList.add('siteheader-blog-nav-active');
        slideDown(navParent, 175);
      }
    });
  }
};

export const formBlogMenu = (blogFragment) => {
  const headerSection = document.createElement('section');
  headerSection.className = blogFragment.className;

  const [
    blogHeaderTop,
    blogHeaderNavCta,
    blogHeaderNav,
  ] = blogFragment?.querySelector('.siteheader')?.children;

  const topColorEl = blogHeaderTop?.children[1]?.querySelector('p');
  const bottomColorEl = blogHeaderTop?.children[2]?.querySelector('p');

  headerSection.classList.add('siteheader-blog');
  headerSection.innerHTML = `<div class='siteheader-blog-top-wrapper'>
      <div class='siteheader-blog-header-top'>
        <div class='siteheader-blog-header-row'>
            <div class='siteheader-blog-header-col'></div>
            <div class='siteheader-blog-header-col'></div>
        </div>
      </div>
    </div>
    <div class='siteheader-blog-bottom-wrapper'>
      <div class='siteheader-blog-header-bottom'>
        <div class='siteheader-blog-nav'>
          <nav></nav>
        </div>
      </div>
    </div>`;

  if (blogHeaderTop) {
    headerSection.querySelector('.siteheader-blog-header-col:first-child').innerHTML = `
      <div class="siteheader-blog-logo-wrap">
        <div class="siteheader-blog-logo-img">
          <img src='${blogHeaderTop.children[0].querySelector('a').innerHTML}' alt=''>
        </div>
        ${blogHeaderTop.children[0].querySelector('.button-container + p') ? `<div class="siteheader-blog-logo-tagline">
          ${blogHeaderTop.children[0].querySelector('.button-container + p').innerHTML}
        </div>` : ''}
      </div>
    `;
    headerSection.querySelector('.siteheader-blog-header-col:last-child').innerHTML = `
          ${blogHeaderTop.children[4].innerHTML}
    `;
  }

  if (blogHeaderNavCta && blogHeaderNav) {
    headerSection.querySelector('.siteheader-blog-nav nav').innerHTML = `
      <div class='siteheader-blog-nav-toggle'>
        <button type='button'>${blogHeaderNavCta.querySelector('p')?.innerHTML}</button>
      </div>
      ${blogHeaderNav.innerHTML}
    `;
    headerSection.querySelector('.siteheader-blog-header-col:last-child').innerHTML = `
          ${blogHeaderTop.children[4].innerHTML}
    `;
    headerSection.querySelector('nav > div:last-child').classList.add('siteheader-blog-menu');
    attachBlogMenuEvents(headerSection, bottomColorEl);
  }

  if (topColorEl.innerHTML.length) {
    headerSection.querySelector('.siteheader-blog-top-wrapper').style.backgroundColor = topColorEl.innerHTML;
  }
  if (bottomColorEl.innerHTML.length) {
    headerSection.querySelector('.siteheader-blog-bottom-wrapper').style.backgroundColor = bottomColorEl.innerHTML;
    headerSection.querySelector('.siteheader-blog-menu').style.backgroundColor = bottomColorEl.innerHTML;
  }

  const currentHeaderEl = document.querySelector('header');
  const currentMainEl = document.querySelector('main');
  currentHeaderEl.classList.add('header-has-blogmenu');
  currentMainEl.insertBefore(headerSection, currentMainEl.firstChild);
};
