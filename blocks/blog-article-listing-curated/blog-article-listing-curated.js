// import { getMetadata } from '../../scripts/aem.js';

import { excelDateToDate } from '../../scripts/scripts.js';

// import { loadFragment } from '../fragment/fragment.js';
export default async function decorate(block) {
  const heading = block.children[0].children[0].innerText;
  const articleOne = block.children[1].children[0].textContent;
  const articleTwo = block.children[1].children[1].textContent;
  const articleThree = block.children[1].children[2].textContent;
  const headDiv = document.createElement('div');
  if (heading !== '') {
    const headingSpam = document.createElement('h2');
    headingSpam.classList.add('title');
    headingSpam.append(heading);
    headDiv.classList.add('heading-div');
    headDiv.append(headingSpam);
  }
  block.innerHTML = '';
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('cards-div');
  block.append(headDiv, blockDiv);
  const data = await fetch('/query-index.json');
  const json = await data.json();
  const postArticle1 = json.data.find((item) => {
    const relativeUrl = new URL(item.url.trim()).pathname;
    return relativeUrl === articleOne.trim() ? relativeUrl : '';
  });
  if (postArticle1) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card-div');
    const relativeUrl = new URL(postArticle1.url.trim()).pathname;
    const imageSrc = document.createElement('img');
    imageSrc.src = postArticle1.image;
    imageSrc.alt = 'thumbnail';
    imageSrc.addEventListener('click', () => {
      window.location.href = `${relativeUrl}`;
    });
    mainDiv.appendChild(imageSrc);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    mainDiv.appendChild(contentDiv);

    const mainTitle = document.createElement('h3');
    mainTitle.classList.add('card-title');
    mainTitle.textContent = postArticle1.title;
    mainTitle.addEventListener('click', () => {
      window.location.href = `${postArticle1.url}`;
    });
    contentDiv.appendChild(mainTitle);

    const datetimeDiv = document.createElement('div');
    datetimeDiv.classList.add('date-div');
    contentDiv.appendChild(datetimeDiv);

    const pubDate = document.createElement('p');
    pubDate.classList.add('date');
    pubDate.textContent = postArticle1.publishedDate;
    pubDate.textContent = postArticle1.publishedDate.includes('/') ? postArticle1.publishedDate : excelDateToDate(postArticle1.publishedDate);
    datetimeDiv.appendChild(pubDate);

    const arcretime = document.createElement('p');
    arcretime.classList.add('read-time');
    arcretime.textContent = `${postArticle1.readTime} min read`;
    datetimeDiv.appendChild(arcretime);

    const categoryPara = document.createElement('p');
    categoryPara.classList.add('category-list');
    contentDiv.appendChild(categoryPara);
    postArticle1.category.split(',').forEach((item) => {
      const categorySpan = document.createElement('a');
      categorySpan.append(item);
      categoryPara.append(categorySpan);
    });
    imageSrc.addEventListener('click', () => {
      window.location.href = `${postArticle1.url}`;
    });
    blockDiv.appendChild(mainDiv);
  }
  const postArticle2 = json.data.find((item) => {
    const relativeUrl = new URL(item.url.trim()).pathname;
    return relativeUrl === articleTwo.trim() ? relativeUrl : '';
  });
  if (postArticle2) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card-div');
    const relativeUrl = new URL(postArticle2.url.trim()).pathname;
    const imageSrc = document.createElement('img');
    imageSrc.src = postArticle2.image;
    imageSrc.alt = 'thumbnail';
    imageSrc.addEventListener('click', () => {
      window.location.href = `${relativeUrl}`;
    });
    mainDiv.appendChild(imageSrc);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    mainDiv.appendChild(contentDiv);

    const mainTitle = document.createElement('h3');
    mainTitle.classList.add('card-title');
    mainTitle.textContent = postArticle2.title;
    mainTitle.addEventListener('click', () => {
      window.location.href = `${postArticle2.url}`;
    });
    contentDiv.appendChild(mainTitle);

    const datetimeDiv = document.createElement('div');
    datetimeDiv.classList.add('date-div');
    contentDiv.appendChild(datetimeDiv);

    const pubDate = document.createElement('p');
    pubDate.classList.add('date');
    pubDate.textContent = postArticle2.publishedDate.includes('/') ? postArticle2.publishedDate : excelDateToDate(postArticle2.publishedDate);
    datetimeDiv.appendChild(pubDate);

    const arcretime = document.createElement('p');
    arcretime.classList.add('read-time');
    arcretime.textContent = `${postArticle2.readTime} min read`;
    datetimeDiv.appendChild(arcretime);

    const categoryPara = document.createElement('p');
    categoryPara.classList.add('category-list');
    contentDiv.appendChild(categoryPara);
    postArticle2.category.split(',').forEach((item) => {
      const categorySpan = document.createElement('a');
      categorySpan.append(item);
      categoryPara.append(categorySpan);
    });
    imageSrc.addEventListener('click', () => {
      window.location.href = `${postArticle2.url}`;
    });
    blockDiv.appendChild(mainDiv);
  }
  const postArticle3 = json.data.find((item) => {
    const relativeUrl = new URL(item.url.trim()).pathname;
    return relativeUrl === articleThree.trim() ? relativeUrl : '';
  });
  if (postArticle3) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card-div');
    const relativeUrl = new URL(postArticle3.url.trim()).pathname;
    const imageSrc = document.createElement('img');
    imageSrc.src = postArticle3.image;
    imageSrc.alt = 'thumbnail';
    imageSrc.addEventListener('click', () => {
      window.location.href = `${relativeUrl}`;
    });
    mainDiv.appendChild(imageSrc);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    mainDiv.appendChild(contentDiv);

    const mainTitle = document.createElement('h3');
    mainTitle.classList.add('card-title');
    mainTitle.textContent = postArticle3.title;
    mainTitle.addEventListener('click', () => {
      window.location.href = `${postArticle3.url}`;
    });
    contentDiv.appendChild(mainTitle);

    const datetimeDiv = document.createElement('div');
    datetimeDiv.classList.add('date-div');
    contentDiv.appendChild(datetimeDiv);

    const pubDate = document.createElement('p');
    pubDate.classList.add('date');
    pubDate.textContent = postArticle3.publishedDate.includes('/') ? postArticle3.publishedDate : excelDateToDate(postArticle3.publishedDate);
    datetimeDiv.appendChild(pubDate);

    const arcretime = document.createElement('p');
    arcretime.classList.add('read-time');
    arcretime.textContent = `${postArticle3.readTime} min read`;
    datetimeDiv.appendChild(arcretime);

    const categoryPara = document.createElement('p');
    categoryPara.classList.add('category-list');
    contentDiv.appendChild(categoryPara);
    imageSrc.addEventListener('click', () => {
      window.location.href = `${postArticle3.url}`;
    });
    postArticle3.category.split(',').forEach((item) => {
      const categorySpan = document.createElement('a');
      categorySpan.append(item);
      categoryPara.append(categorySpan);
    });
    blockDiv.appendChild(mainDiv);
  }
}
