import { getMetadata } from '../../scripts/aem.js';
import { loadFragment } from '../fragment/fragment.js';

export default async function decorate() { // block
  const socialMeta = getMetadata('/content-fragments/blog-social-fragment');
  const socialPath = socialMeta
    ? new URL(socialMeta, window.location).pathname
    : '/content-fragments/blog-social-fragment';
  const fragment = await loadFragment(socialPath);

  const isArticlePage = document.querySelector('body').classList.contains('article-page');
  if (isArticlePage) {
    const lastElem = document.querySelector('.blog-article-listing-curated-wrapper');
    const mainElem = document.querySelector('main');
    const socialEl = fragment?.querySelector('.blog-social-links');

    if (socialEl) {
      socialEl.classList.add('blog-social-links');
      const [leftDiv, rightDiv] = Array.from(socialEl.querySelectorAll(':scope > div > div'));
      const emEl = Array.from(socialEl.querySelectorAll(':scope em'));

      [...leftDiv.querySelectorAll('p'), ...rightDiv.querySelectorAll('p')].forEach((pTag) => {
        const btnEl = document.createElement('a');
        if (pTag.innerHTML.indexOf('facebook') !== -1) {
          btnEl.href = `https://www.facebook.com/sharer/sharer.php?u=${window.location.href}`;
        }
        if (pTag.innerHTML.indexOf('twitter') !== -1) {
          btnEl.href = `https://twitter.com/intent/tweet?url=${window.location.href}`;
        }
        if (pTag.innerHTML.indexOf('linkedin') !== -1) {
          btnEl.href = `https://www.linkedin.com/shareArticle?mini=true&url=${window.location.href}`;
        }
        if (pTag.innerHTML.indexOf('Email') !== -1 || pTag.innerHTML.indexOf('email') !== -1) {
          let h1Str = '';
          if (document.querySelector('h1')) {
            h1Str = document.querySelector('h1').innerHTML;
          }
          btnEl.href = `mailto:?subject=${h1Str}&body=${window.location.href}`;
        }
        if (pTag.innerHTML.indexOf('print') !== -1) {
          btnEl.addEventListener('click', (event) => {
            event.preventDefault();
            window.print();
          });
        }

        btnEl.append(pTag.querySelector('span'));
        btnEl.setAttribute('title', pTag.querySelector('em').innerHTML);

        pTag.replaceWith(btnEl);
      });

      emEl.forEach((el) => {
        el.setAttribute('aria-hidden', true);
      });

      if (lastElem) {
        lastElem.parentNode.insertBefore(socialEl, lastElem);
      } else {
        mainElem.append(socialEl);
      }
    }
  }
}
// export default function decorate(block) {
//   const socialShare = block.children[0];
//   socialShare.classList.add('social-share');
//   const like = socialShare.children[0];
//   like.classList.add('like');
//   const share = socialShare.children[1];
//   share.classList.add('share');
//   const feedback = document.createElement('p');
//   feedback.classList.add('feedback');
//   feedback.innerHTML = 'Thank you for your feedback!';
//   if (like) {
//     const likeIcon = document.createElement('p');
//     likeIcon.classList.add('like-icons');
//     likeIcon.innerHTML = `
//         <i class="fa-regular fa-thumbs-up"></i>
//         <i class="fa-regular fa-thumbs-down"></i>
//     `;
//     likeIcon.addEventListener('click', () => {
//       likeIcon.style.display = 'none';
//       feedback.style.display = 'block';
//     });
//     like.append(likeIcon, feedback);
//   }
//   if (share) {
//     const shareIcon = document.createElement('div');
//     shareIcon.classList.add('share-icons');
//     const fb = document.createElement('span');
//     fb.innerHTML = '<i class="fa-brands fa-facebook-f"></i>';
//     fb.addEventListener('click', () => {
//       const url = encodeURIComponent(window.location.href);
//       window.open(`https://www.facebook.com/sharer/sharer.php?t=${document.title}&u=${url}`, '_blank');
//     });
//     const twitter = document.createElement('span');
//     twitter.innerHTML = '<i class="fa-brands fa-x-twitter"></i>';
//     twitter.addEventListener('click', () => {
//       const twitterlink = encodeURIComponent(window.location.href);
//       window.open(`https://twitter.com/intent/tweet?url=${twitterlink}&text=${document.title}`, '_blank');
//     });
//     const linked = document.createElement('span');
//     linked.innerHTML = '<i class="fa-brands fa-linkedin-in"></i>';
//     linked.addEventListener('click', () => {
//       const inlink = encodeURIComponent(window.location.href);
//       window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${inlink}&text=${document.title}`, '_blank');
//     });
//     const mail = document.createElement('span');
//     mail.innerHTML = '<i class="fa-solid fa-envelope"></i>';
//     mail.addEventListener('click', () => {
//       const maillink = encodeURIComponent(window.location.href);
//       window.open(`mailto:?subject=${document.title}&body=${maillink}`, '_blank');
//     });
//     const print = document.createElement('span');
//     print.innerHTML = '<i class="fa-solid fa-print"></i>';
//     print.addEventListener('click', () => {
//       window.print();
//     });
//     shareIcon.append(fb, twitter, linked, mail, print);
//     share.append(shareIcon);
//   }
//   const pTag = like.children[0];
//   const pTagsec = share.children[0];
//   if (pTag) {
//     const h4 = document.createElement('h4');
//     h4.innerHTML = pTag.innerHTML;
//     pTag.replaceWith(h4);
//   }
//   if (pTagsec) {
//     const h4 = document.createElement('h4');
//     h4.innerHTML = pTagsec.innerHTML;
//     pTagsec.replaceWith(h4);
//   }
// }
