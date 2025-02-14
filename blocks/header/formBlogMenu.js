export const formBlogMenu = (blogFragment) => {
  const headerSection = document.createElement('section');
  headerSection.className = blogFragment.className;
  
  const [blogHeaderTop, blogHeaderNavCta, blogHeaderNav] = blogFragment.querySelector('.siteheader')?.children;

  const topColorEl = blogHeaderTop.children[1].querySelector('p');
  if (topColorEl.innerHTML.length > 0) {
    headerSection.style.backgroundColor = topColorEl.innerHTML;
  }

  headerSection.classList.add('siteheader-blog');
  headerSection.innerHTML = `<div class='siteheader-blog-header-top'>
      <div class='siteheader-blog-header-row'>
          <div class='siteheader-blog-header-col'></div>
          <div class='siteheader-blog-header-col'></div>
      </div>
    </div>
    <div class='siteheader-blog-header-bottom'>
      <div class='siteheader-blog-nav'>
        <nav></nav>
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

  const currentHeaderEl = document.querySelector('header');
  const currentMainEl = document.querySelector('main');
  currentHeaderEl.classList.add('header-has-blogmenu');
  currentMainEl.insertBefore(headerSection, currentMainEl.firstChild);
};
