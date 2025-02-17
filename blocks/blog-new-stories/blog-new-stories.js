export default async function decorate(block) {
  const heading = block.children[0].children[0].innerText;
  const inlinewithIcon = block.children[0].children[1].innerHTML;
  const articleOne = block.children[1].children[0].textContent;
  const articleTwo = block.children[2].children[0].textContent;
  const articleThree = block.children[3].children[0].textContent;
  const headDiv = document.createElement('div');
  if (heading !== '') {
    const headingSpam = document.createElement('h2');
    headingSpam.classList.add('stories-title');
    headingSpam.append(heading);
    headDiv.classList.add('new-heading');
    const iconwithtext = document.createElement('span');
    iconwithtext.classList.add('line-icon');
    iconwithtext.innerHTML = inlinewithIcon;
    headDiv.append(headingSpam, iconwithtext);
  }
  block.innerHTML = '';
  const blockDiv = document.createElement('div');
  blockDiv.classList.add('new-cards');
  block.append(headDiv, blockDiv);
  const data = await fetch('/query-index.json');
  const json = await data.json();
  const postArticle1 = json.data.find((item) => item.url === articleOne);
  if (postArticle1) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('new-card-div');

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

    const cardDesc = document.createElement('p');
    cardDesc.classList.add('description');
    cardDesc.textContent = postArticle1.description;
    contentDiv.appendChild(cardDesc);

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
    const categoryArr = postArticle1.category.split(',');
    categoryArr.forEach((item) => {
      const anchor = document.createElement('a');
      anchor.href = 'www.google.com';
      anchor.textContent = item;
      categoryPara.appendChild(anchor);
    });
    blockDiv.appendChild(mainDiv);
    blockDiv.addEventListener('click', () => {
      window.location.href = `${postArticle1.url}`;
    });
  }
  const postArticle2 = json.data.find((item) => item.url === articleTwo);
  if (postArticle2) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('new-card-div');

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

    const cardDesc = document.createElement('p');
    cardDesc.classList.add('description');
    cardDesc.textContent = postArticle2.description;
    contentDiv.appendChild(cardDesc);

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
    const categoryArr = postArticle2.category.split(',');
    categoryArr.forEach((item) => {
      const anchor = document.createElement('a');
      anchor.href = 'www.google.com';
      anchor.textContent = item;
      categoryPara.appendChild(anchor);
    });
    blockDiv.appendChild(mainDiv);
    blockDiv.addEventListener('click', () => {
      window.location.href = `${postArticle2.url}`;
    });
  }
  const postArticle3 = json.data.find((item) => item.url === articleThree);
  if (postArticle3) {
    const mainDiv = document.createElement('div');
    mainDiv.classList.add('new-card-div');

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

    const cardDesc = document.createElement('p');
    cardDesc.classList.add('description');
    cardDesc.textContent = postArticle3.description;
    contentDiv.appendChild(cardDesc);

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
    const categoryArr = postArticle3.category.split(',');
    categoryArr.forEach((item) => {
      // const categorySpan = document.createElement('a');
      // categorySpan.append(item);
      // categoryPara.append(categorySpan);
      const anchor = document.createElement('a');
      anchor.href = 'www.google.com';
      anchor.textContent = item;
      categoryPara.appendChild(anchor);
    });
    blockDiv.appendChild(mainDiv);
    blockDiv.addEventListener('click', () => {
      window.location.href = `${postArticle3.url}`;
    });
  }
}
