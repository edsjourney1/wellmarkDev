export default function decorate(block) {
  const audio = block.children[0].children[0].querySelector('p');
  if (audio) {
    audio.parentElement.classList.add('article-audio');
  }
  const dates = document.createElement('div');
  // create a div for the date section
  const date = document.createElement('div');
  date.classList.add('date');
  // create span tag for last published date
  const publishedDate = document.querySelector('meta[name="publish-date"]');
  if (publishedDate) {
    // create a p tag for published dates
    const publish = document.createElement('p');
    const publishSpan = document.createElement('span');
    publishSpan.innerText = 'Published:';
    const publishdata = publishedDate.content;
    const dateformat = document.createElement('span');
    dateformat.innerText = publishdata;
    publish.append(publishSpan, dateformat);
    date.prepend(publish);
  }
  // create a p tag for modified dates
  const modify = document.createElement('p');
  const modifyspan = document.createElement('span');
  modifyspan.innerText = 'Last Updated:';
  modify.append(modifyspan);
  // function for last-modified date append dynamically
  setTimeout(() => {
    const queryModify = block.querySelector('.date');
    if (queryModify) {
      const publishedElement = Array.from(queryModify.children).find((child) => child.innerText === 'Last Updated:');
      const published = publishedElement ? publishedElement.innerText : null;
      const updated = published;
      // Check if date element exists
      if (updated) {
        const modifiedDate = window.BlogLastModified;
        // Check if modifiedDate exists
        if (modifiedDate) {
          const spanmodified = document.createElement('span');
          spanmodified.innerHTML = modifiedDate;
          publishedElement.append(spanmodified);
        }
      }
    }
  }, 500);
  date.append(modify);
  // create a div for author
  const author = document.createElement('div');
  author.classList.add('author');
  const authorName = document.querySelector('meta[name="author"]');
  if (authorName) {
    const authorContent = authorName.content;
    const authorPtag = document.createElement('p');
    authorPtag.innerText = authorContent;
    // create a span tag for the icon
    const span = document.createElement('span');
    span.classList.add('icon', 'icon-regular--user');
    const i = document.createElement('i');
    i.classList.add('fa-regular', 'fa-user');
    i.setAttribute('data-icon-name', 'regular--user');
    span.append(i);
    authorPtag.prepend(span);
    author.append(authorPtag);
  }
  dates.append(date, author);
  // create a new div for articles category
  const categoryValue = document.createElement('div');
  // create a new div for articles
  const articles = document.createElement('div');
  articles.classList.add('article-link');
  // create a p tag for reading timez
  const readTime = document.createElement('p');
  // create a tag for the links
  const categoryMetaTag = document.querySelector('meta[name="tag"]');
  if (categoryMetaTag) {
    const categoryValues = categoryMetaTag.content;
    if (categoryValues) {
      // create a p tag for article links
      const articleLinks = document.createElement('p');
      const splitValues = categoryValues.split(', ');
      splitValues.forEach((category) => {
        // Create a new span element
        const aTag = document.createElement('a');
        aTag.textContent = category;
        // Append the span element to the container
        articleLinks.appendChild(aTag);
        articles.append(articleLinks);
      });
    }
  }
  const readingTime = document.querySelector('meta[name="readingtime"]');
  if (readingTime) {
    const timeData = readingTime.content;
    const spanTime = document.createElement('span');
    spanTime.innerHTML = timeData;
    const spanSec = document.createElement('span');
    spanSec.innerHTML = 'Min Read';
    readTime.append(spanTime, spanSec);
  }
  articles.prepend(readTime);
  categoryValue.appendChild(articles);
  block.prepend(dates, categoryValue);
}
