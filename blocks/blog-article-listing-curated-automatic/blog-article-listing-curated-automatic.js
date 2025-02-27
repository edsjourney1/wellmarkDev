// import { getMetadata } from '../../scripts/aem.js';

import { excelDateToDate } from '../../scripts/scripts.js';

// import { loadFragment } from '../fragment/fragment.js';

export default async function decorate(block) {
  const heading = block.children[0].children[0].textContent;
  const categoryByauthor = block.children[1].children[0].textContent;
  const inlinewithIcon = block.children[0].children[1].innerHTML;
  const headingSpam = document.createElement('h2');
  headingSpam.classList.add('title');
  const iconwithtext = document.createElement('span');
  iconwithtext.classList.add('text-icon');
  iconwithtext.innerHTML = inlinewithIcon;
  headingSpam.append(heading);
  const headDiv = document.createElement('div');
  headDiv.classList.add('heading-div');
  headDiv.append(headingSpam, iconwithtext);
  block.innerHTML = '';
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('cards-div');
  block.append(headDiv, blockDiv);
  const data = await fetch('/query-index.json');
  const json = await data.json();
  // eslint-disable-next-line max-len
  const categoryBasedJson = json.data.filter((article) => article.category.includes(categoryByauthor));
  function renderItems() {
    blockDiv.innerHTML = '';
    function getRandomArticlesfromJSON(num = 3) {
      for (let i = 0; i < categoryBasedJson.length - 1; i += 1) {
        const j = Math.floor(Math.random() * (i + 1));
        [categoryBasedJson[i], categoryBasedJson[j]] = [categoryBasedJson[j], categoryBasedJson[i]];
      }
      return categoryBasedJson.slice(0, num);
    }
    const randomArticles = getRandomArticlesfromJSON();
    randomArticles.forEach(({
      image, category, publishedDate, readTime, title,
    }) => {
      const mainDiv = document.createElement('div');
      mainDiv.classList.add('card-div');

      const imageSrc = document.createElement('img');
      imageSrc.src = image;
      imageSrc.alt = 'thumbnail';
      mainDiv.appendChild(imageSrc);

      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content-div');
      mainDiv.appendChild(contentDiv);

      const mainTitle = document.createElement('h3');
      mainTitle.classList.add('card-title');
      mainTitle.textContent = title;
      contentDiv.appendChild(mainTitle);

      const datetimeDiv = document.createElement('div');
      datetimeDiv.classList.add('date-div');
      contentDiv.appendChild(datetimeDiv);

      const pubDate = document.createElement('p');
      pubDate.classList.add('date');
      pubDate.textContent = publishedDate.includes('/') ? publishedDate : excelDateToDate(publishedDate);
      datetimeDiv.appendChild(pubDate);

      const arcretime = document.createElement('p');
      arcretime.classList.add('read-time');
      arcretime.textContent = `${readTime} min read`;
      datetimeDiv.appendChild(arcretime);

      const categoryPara = document.createElement('p');
      categoryPara.classList.add('category-list');
      contentDiv.appendChild(categoryPara);
      category.split(',').forEach((item) => {
        const anchor = document.createElement('a');
        anchor.href = 'www.google.com';
        anchor.textContent = item;
        categoryPara.appendChild(anchor);
      });
      blockDiv.appendChild(mainDiv);
    });
  }
  renderItems();
}
