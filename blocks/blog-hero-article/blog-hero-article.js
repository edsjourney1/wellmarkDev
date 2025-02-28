import { excelDateToDate } from '../../scripts/scripts.js';

export default async function decorate(block) {
  const mainPageURL = String(block.children[0].textContent);
  block.innerHTML = '';
  const data = await fetch('/query-index.json');
  const json = await data.json();
  const postArticle = json.data.find((item) => {
    const relativeUrl = new URL(item.url.trim()).pathname;
    return relativeUrl === mainPageURL.trim() ? relativeUrl : '';
  });
  console.log(postArticle);
  const blogHero = document.createElement('div');
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('image-div');
  const imageURL = document.createElement('img');
  imageURL.src = postArticle.image;
  imageURL.alt = 'image';
  imgDiv.append(imageURL);
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content-div');
  const button = document.createElement('p');
  button.classList.add('button-container');
  const buttonanchor = document.createElement('a');
  buttonanchor.classList.add('button', 'primary');
  buttonanchor.setAttribute('href', `${mainPageURL}`);
  buttonanchor.innerText = 'Read more';
  button.append(buttonanchor);
  const categoryDateDiv = document.createElement('div');
  categoryDateDiv.classList.add('date-div');
  const descriptionDiv = document.createElement('div');
  const descriptionPara = document.createElement('p');
  const heading = document.createElement('h2');
  heading.append(postArticle.title);
  descriptionPara.append(postArticle.description);
  descriptionDiv.append(descriptionPara);
  descriptionDiv.classList.add('description');
  const dateandtime = document.createElement('p');
  const span = document.createElement('span');
  const pubDate = document.createElement('p');
  pubDate.classList.add('date');
  pubDate.textContent = postArticle.publishedDate.includes('/') ? postArticle.publishedDate : excelDateToDate(postArticle.publishedDate);
  span.append(postArticle.pubDate);
  const articletime = document.createElement('span');
  articletime.append(`${postArticle.readTime} min read`);
  dateandtime.append(span, articletime);
  const categoryPara = document.createElement('p');
  categoryPara.classList.add('category-list');
  postArticle.category.split(',').forEach((item) => {
    const categorySpan = document.createElement('a');
    categorySpan.append(item);
    categoryPara.append(categorySpan);
  });
  categoryDateDiv.append(dateandtime, categoryPara);
  contentDiv.append(heading, categoryDateDiv, descriptionDiv, button);
  blogHero.append(imgDiv, contentDiv);
  block.append(blogHero);
}
