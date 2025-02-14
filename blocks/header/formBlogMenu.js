const attachBlogMenuEvents = (headerSection) => {
  const navBtn = headerSection.querySelector('.siteheader-blog-nav-toggle > button');
  const navParent = headerSection.querySelector('.siteheader-blog-menu');
  const liItems = Array.from(headerSection.querySelectorAll('nav > div > ul > li'));

  if (navBtn && navParent && liItems.length) {
    navBtn.addEventListener('click', () => {
      if (navParent.classList.contains('siteheader-blog-menu-active')) {
        navParent.classList.remove('siteheader-blog-menu-active');
      } else {
        navParent.classList.add('siteheader-blog-menu-active');
      }
    });
  }
};

export const formBlogMenu = (blogFragment) => {
  const headerSection = document.createElement('section');
  headerSection.className = blogFragment.className;
  
  const [blogHeaderTop, blogHeaderNavCta, blogHeaderNav] = blogFragment.querySelector('.siteheader')?.children;

  const topColorEl = blogHeaderTop.children[1].querySelector('p');
  const bottomColorEl = blogHeaderTop.children[2].querySelector('p');

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
  
  if (topColorEl.innerHTML.length > 0) {
    headerSection.querySelector('.siteheader-blog-top-wrapper').style.backgroundColor = topColorEl.innerHTML;
  }
  if (bottomColorEl.innerHTML.length > 0) {
    headerSection.querySelector('.siteheader-blog-bottom-wrapper').style.backgroundColor = bottomColorEl.innerHTML;
  }

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
    attachBlogMenuEvents(headerSection);
  }

  const currentHeaderEl = document.querySelector('header');
  const currentMainEl = document.querySelector('main');
  currentHeaderEl.classList.add('header-has-blogmenu');
  currentMainEl.insertBefore(headerSection, currentMainEl.firstChild);
};
