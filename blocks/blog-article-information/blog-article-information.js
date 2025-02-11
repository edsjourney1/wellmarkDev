// export default function decorate(block) {
//   const blockChild = block.children[0].children[0];
//   const dates = block.children[0].children[0].querySelector('p');
//   if (dates) {
//     dates.parentElement.classList.add('date');
//   }
//   setTimeout(() => {
//     // Check if block and its children exist
//     if (block && block.children && block.children[0] && block.children[0].children[1]) {
//       const date = block.children[0].children[1].querySelector('p');
//       // Check if date element exists
//       if (date) {
//         const modifiedDate = window.BlogLastModified;
//         // Check if modifiedDate exists
//         if (modifiedDate) {
//           const spanmodified = document.createElement('span');
//           spanmodified.innerHTML = modifiedDate;
//           date.append(spanmodified);
//           // Check if blockChild exists before appending
//           if (blockChild) {
//             blockChild.append(date);
//           }
//         } else {
//           const spanNull = document.createElement('span');
//           spanNull.innerHTML = 'MM/DD/YYYY';
//           date.append(spanNull);
//           // Check if blockChild exists before appending
//           if (blockChild) {
//             blockChild.append(date);
//           }
//         }
//       }
//     }
//   }, 500);
//   const author = block.children[0].children[2].querySelector('p');
//   if (author) {
//     author.parentElement.classList.add('author');
//   }
//   const authorPtag = document.querySelector('.author p');
//   const authorName = document.querySelector('meta[name="author-name"]').content;
//   const authorSpantag = document.createElement('p');
//   const nameofAuthor = document.createTextNode(authorName);
//   if (authorPtag) {
//     authorSpantag.appendChild(nameofAuthor);
//     authorPtag.appendChild(authorSpantag);
//   }
//   const linkPara = block.children[1].children[0].querySelector('p');
//   if (linkPara) {
//     linkPara.parentElement.classList.add('article-link');
//     const links = linkPara.querySelectorAll('a');
//     links.forEach((link) => {
//       if (link.href || link.textContent.trim()) {
//         const anchorPtag = document.createElement('p');
//         anchorPtag.append(link);
//         linkPara.parentElement.append(anchorPtag);
//       } else {
//         // Remove the empty <a> tag
//         link.remove();
//       }
//     });
//   }
//   const audio = block.children[2].children[0].querySelector('p');
//   if (audio) {
//     audio.parentElement.classList.add('article-audio');
//   }
// }

export default function decorate(block) {
  const audio = block.children[0].children[0].querySelector('p');
  if (audio) {
    audio.parentElement.classList.add('article-audio');
  }
  const dates = document.createElement('div');
  // create a div for the date section
  const date = document.createElement('div');
  date.classList.add('date');
  // create a p tag for published dates
  const publish = document.createElement('p');
  const publishSpan = document.createElement('span');
  publishSpan.innerText = 'Published:';
  // create span tag for last published date
  const dateformat = document.createElement('span');
  const publishedDate = document.querySelector('meta[name="published"]').content;
  dateformat.innerText = publishedDate;
  publish.append(publishSpan, dateformat);
  date.prepend(publish);
  // create a p tag for modified dates
  const modify = document.createElement('p');
  const modifyspan = document.createElement('span');
  modifyspan.innerText = 'Last Updated:';
  modify.append(modifyspan);
  // function for last-modified date append dynamically
  setTimeout(() => {
    const queryModify = block.querySelector('.date');
    const updated = queryModify.children[1];
    // Check if date element exists
    if (updated) {
      const modifiedDate = window.BlogLastModified;
      // Check if modifiedDate exists
      if (modifiedDate) {
        const spanmodified = document.createElement('span');
        spanmodified.innerHTML = modifiedDate;
        updated.append(spanmodified);
      } else {
        const spanNull = document.createElement('span');
        spanNull.innerHTML = 'MM/DD/YYYY';
        updated.append(spanNull);
      }
    }
  }, 500);
  date.append(modify);
  // create a div for author
  const author = document.createElement('div');
  author.classList.add('author');
  const authorName = document.querySelector('meta[name="author"]').content;
  const authorPtag = document.createElement('p');
  authorPtag.innerText = authorName;
  // create a span tag for the icon
  const span = document.createElement('span');
  span.classList.add('icon', 'icon-regular--user');
  const i = document.createElement('i');
  i.classList.add('fa-regular', 'fa-user');
  i.setAttribute('data-icon-name', 'regular--user');
  span.append(i);
  authorPtag.prepend(span);
  author.append(authorPtag);
  dates.append(date, author);
  // create a new div for articles category 
  const categoryValue = document.createElement('div');
  // create a new div for articles 
  const articles = document.createElement('div');
  articles.classList.add('article-link');
  // create a p tag for reading timez
  const readTime = document.createElement('p');
  // create a p tag for article links
  const articleLinks = document.createElement('p');
  // create a tag for the links
  const categoryMetaTag = document.querySelector('meta[name="categories"]');
  const categoryValues = categoryMetaTag.content.split(', ');
  categoryValues.forEach((category) => {
    // Create a new span element
    const aTag = document.createElement('a');
    aTag.textContent = category;
    // Append the span element to the container
    articleLinks.appendChild(aTag);
  });
  const readingTime = document.querySelector('meta[name="read-time"]').content;
  if (readingTime) {
    const span = document.createElement('span');
    span.innerHTML = readingTime;
    const spanSec = document.createElement('span');
    spanSec.innerHTML = 'Min Read';
    readTime.append(span, spanSec);
  }
  articles.append(readTime, articleLinks);
  categoryValue.appendChild(articles);
  block.prepend(dates, categoryValue);
}
