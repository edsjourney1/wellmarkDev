import myJson from '../../scripts/constants.js';

export default async function decorate(block) {
  const articleDetails = String(block.children[0].textContent);
  block.innerHTML = '';
  // eslint-disable-next-line no-confusing-arrow
  const postArticle = myJson.find((item) => item.url === articleDetails);
  // const postArticle = myJson.find((item) => item.url === mainPageURL ? item : '');
  console.log(postArticle);
  const blogHero = document.createElement('div');
  const imgDiv = document.createElement('div');
  imgDiv.classList.add('image-div');
  const imageURL = document.createElement('img');
  imageURL.src = articleDetails.image;
  imageURL.alt = 'image';
  imgDiv.append(imageURL);
  const contentDiv = document.createElement('div');
  contentDiv.classList.add('content-div');
  const button = document.createElement('p');
  button.classList.add('button-container');
  const buttonanchor = document.createElement('a');
  buttonanchor.classList.add('button', 'primary');
  buttonanchor.setAttribute('href', `${articleDetails}`);
  buttonanchor.innerText = 'Read more';
  button.append(buttonanchor);
  const categoryDateDiv = document.createElement('div');
  categoryDateDiv.classList.add('date-div');
  const descriptionDiv = document.createElement('div');
  const descriptionPara = document.createElement('p');
  const heading = document.createElement('h2');
  heading.append(articleDetails.title);
  descriptionPara.append(articleDetails.description);
  descriptionDiv.append(descriptionPara);
  descriptionDiv.classList.add('description');
  const dateandtime = document.createElement('p');
  const span = document.createElement('span');
  span.append(articleDetails.publishedDate);
  const articletime = document.createElement('span');
  articletime.append(`${articleDetails.readTime} min read`);
  dateandtime.append(span, articletime);
  const categoryPara = document.createElement('p');
  categoryPara.classList.add('category-list');
  articleDetails.category.forEach((item) => {
    const categorySpan = document.createElement('a');
    categorySpan.append(item);
    categoryPara.append(categorySpan);
  });
  categoryDateDiv.append(dateandtime, categoryPara);
  contentDiv.append(heading, categoryDateDiv, descriptionDiv, button);
  blogHero.append(imgDiv, contentDiv);
  block.append(blogHero);
}
