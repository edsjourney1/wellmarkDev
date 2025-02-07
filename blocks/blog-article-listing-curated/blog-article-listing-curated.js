// import { getMetadata } from '../../scripts/aem.js';
// import { loadFragment } from '../fragment/fragment.js';

import myJson from '../../scripts/constants.js';

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
  const postArticle1 = myJson.find((item) => item.url === articleOne);
  if (postArticle1) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card-div');

    const imageSrc = document.createElement('img');
    imageSrc.src = postArticle1.image;
    imageSrc.alt = 'thumbnail';
    mainDiv.appendChild(imageSrc);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    mainDiv.appendChild(contentDiv);

    const mainTitle = document.createElement('h3');
    mainTitle.classList.add('card-title');
    mainTitle.textContent = postArticle1.title;
    contentDiv.appendChild(mainTitle);

    const datetimeDiv = document.createElement('div');
    datetimeDiv.classList.add('date-div');
    contentDiv.appendChild(datetimeDiv);

    const pubDate = document.createElement('p');
    pubDate.classList.add('date');
    pubDate.textContent = postArticle1.publishedDate;
    datetimeDiv.appendChild(pubDate);

    const arcretime = document.createElement('p');
    arcretime.classList.add('read-time');
    arcretime.textContent = `${postArticle1.readTime} min read`;
    datetimeDiv.appendChild(arcretime);

    const categoryPara = document.createElement('p');
    categoryPara.classList.add('category-list');
    contentDiv.appendChild(categoryPara);
    postArticle1.category.forEach((item) => {
      const categorySpan = document.createElement('a');
      categorySpan.append(item);
      categoryPara.append(categorySpan);
    });
    blockDiv.appendChild(mainDiv);
    blockDiv.addEventListener('click', () => {
      window.location.href = `${postArticle1.url}`;
    });
  }
  const postArticle2 = myJson.find((item) => item.url === articleTwo);
  if (postArticle2) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card-div');

    const imageSrc = document.createElement('img');
    imageSrc.src = postArticle2.image;
    imageSrc.alt = 'thumbnail';
    mainDiv.appendChild(imageSrc);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    mainDiv.appendChild(contentDiv);

    const mainTitle = document.createElement('h3');
    mainTitle.classList.add('card-title');
    mainTitle.textContent = postArticle2.title;
    contentDiv.appendChild(mainTitle);

    const datetimeDiv = document.createElement('div');
    datetimeDiv.classList.add('date-div');
    contentDiv.appendChild(datetimeDiv);

    const pubDate = document.createElement('p');
    pubDate.classList.add('date');
    pubDate.textContent = postArticle2.publishedDate;
    datetimeDiv.appendChild(pubDate);

    const arcretime = document.createElement('p');
    arcretime.classList.add('read-time');
    arcretime.textContent = `${postArticle2.readTime} min read`;
    datetimeDiv.appendChild(arcretime);

    const categoryPara = document.createElement('p');
    categoryPara.classList.add('category-list');
    contentDiv.appendChild(categoryPara);
    postArticle2.category.forEach((item) => {
      const categorySpan = document.createElement('a');
      categorySpan.append(item);
      categoryPara.append(categorySpan);
    });
    blockDiv.appendChild(mainDiv);
    blockDiv.addEventListener('click', () => {
      window.location.href = `${postArticle2.url}`;
    });
  }
  const postArticle3 = myJson.find((item) => item.url === articleThree);
  if (postArticle3) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('card-div');

    const imageSrc = document.createElement('img');
    imageSrc.src = postArticle3.image;
    imageSrc.alt = 'thumbnail';
    mainDiv.appendChild(imageSrc);

    const contentDiv = document.createElement('div');
    contentDiv.classList.add('content-div');
    mainDiv.appendChild(contentDiv);

    const mainTitle = document.createElement('h3');
    mainTitle.classList.add('card-title');
    mainTitle.textContent = postArticle3.title;
    contentDiv.appendChild(mainTitle);

    const datetimeDiv = document.createElement('div');
    datetimeDiv.classList.add('date-div');
    contentDiv.appendChild(datetimeDiv);

    const pubDate = document.createElement('p');
    pubDate.classList.add('date');
    pubDate.textContent = postArticle3.publishedDate;
    datetimeDiv.appendChild(pubDate);

    const arcretime = document.createElement('p');
    arcretime.classList.add('read-time');
    arcretime.textContent = `${postArticle3.readTime} min read`;
    datetimeDiv.appendChild(arcretime);

    const categoryPara = document.createElement('p');
    categoryPara.classList.add('category-list');
    contentDiv.appendChild(categoryPara);
    postArticle3.category.forEach((item) => {
      const categorySpan = document.createElement('a');
      categorySpan.append(item);
      categoryPara.append(categorySpan);
    });
    blockDiv.appendChild(mainDiv);
    blockDiv.addEventListener('click', () => {
      window.location.href = `${postArticle3.url}`;
    });
  }
}
