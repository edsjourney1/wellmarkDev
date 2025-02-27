// import { getMetadata } from '../../scripts/aem.js';
import { excelDateToDate } from '../../scripts/scripts.js';
// import { loadFragment } from '../fragment/fragment.js';
export default async function decorate(block) {
  const categoryByauthor = block.children[1].children[1].innerText;
  const heading = block.children[0].children[0].innerText;
  const itemsPerPage = Number(block.children[1].children[0].innerText);
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
  const paginationDiv = document.createElement('div');
  paginationDiv.classList.add('pagination');
  const paginationContainer = document.createElement('div');
  paginationContainer.classList.add('pagination-container');
  const countList = document.createElement('div');
  countList.classList.add('count-list');
  const countResult = document.createElement('div');
  countResult.classList.add('count-result');
  paginationContainer.append(countList, countResult);
  paginationDiv.append(paginationContainer);
  block.append(headDiv, blockDiv, paginationDiv);
  let currentPage = 1;
  const data = await fetch('/query-index.json');
  const json = await data.json();
  // eslint-disable-next-line max-len
  const categoryBasedJson = json.data.filter((article) => article.category.includes(categoryByauthor));
  function renderItems() {
    blockDiv.innerHTML = '';
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = startIndex + itemsPerPage;
    // eslint-disable-next-line max-len
    const jsonVar = categoryBasedJson.slice(startIndex, endIndex);
    const sortedJSON = jsonVar.sort((a, b) => {
      const dateA = new Date(a.publishedDate?.split('/').reverse().join('/'));
      const dateB = new Date(b.publishedDate?.split('/').reverse().join('/'));
      return dateA - dateB;
    });
    sortedJSON.forEach(({
      image, category, publishedDate, readTime, title, url,
    }) => {
      const mainDiv = document.createElement('div');
      mainDiv.classList.add('card-div');

      const imageSrc = document.createElement('img');
      imageSrc.src = image;
      imageSrc.alt = 'thumbnail';
      imageSrc.addEventListener('click', () => {
        window.location.href = `${url}`;
      });
      mainDiv.appendChild(imageSrc);

      const contentDiv = document.createElement('div');
      contentDiv.classList.add('content-div');
      mainDiv.appendChild(contentDiv);

      const mainTitle = document.createElement('h3');
      mainTitle.classList.add('card-title');
      mainTitle.textContent = title;
      mainTitle.addEventListener('click', () => {
        window.location.href = `${url}`;
      });
      contentDiv.appendChild(mainTitle);

      const datetimeDiv = document.createElement('div');
      datetimeDiv.classList.add('date-div');
      contentDiv.appendChild(datetimeDiv);

      const pubDate = document.createElement('p');
      pubDate.classList.add('date');
      pubDate.textContent = excelDateToDate(publishedDate);
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
    countList.innerHTML = '';
    const showingText = document.createElement('p');
    showingText.textContent = 'Showing';
    countList.appendChild(showingText);
    const showingSpan = document.createElement('span');
    showingSpan.textContent = `${startIndex + 1} - ${Math.min(endIndex, categoryBasedJson.length)}`;
    countList.appendChild(showingSpan);
    const ofText = document.createElement('p');
    ofText.textContent = 'of';
    countList.appendChild(ofText);
    const ofSpan = document.createElement('span');
    ofSpan.textContent = categoryBasedJson.length;
    countList.appendChild(ofSpan);
  }

  function renderPagination() {
    const totalPages = Math.ceil(categoryBasedJson.length / itemsPerPage);
    countResult.innerHTML = '';

    // Function to create a pagination button
    function createButton(text, page) {
      const button = document.createElement('button');
      button.textContent = text;
      button.addEventListener('click', () => {
        currentPage = page;
        renderItems();
        renderPagination();
      });
      if (page === currentPage) {
        button.classList.add('active');
      }
      return button;
    }

    // Function to create an ellipsis button
    function createEllipsis() {
      const ellipsis = document.createElement('button');
      ellipsis.textContent = '...';
      ellipsis.disabled = true;
      return ellipsis;
    }

    // Create previous page button
    const previousPageButton = document.createElement('p');
    previousPageButton.innerHTML = '<i class="fa-regular fa-chevrons-left"></i>';
    previousPageButton.addEventListener('click', () => {
      currentPage = 1;
      renderItems();
      renderPagination();
    });
    countResult.appendChild(previousPageButton);

    // Create first page button
    const firstPageButton = document.createElement('p');
    firstPageButton.innerHTML = '<i class="fa-regular fa-chevron-left"></i>';
    firstPageButton.addEventListener('click', () => {
      if (currentPage > 1) {
        currentPage -= 1;
        renderItems();
        renderPagination();
      }
    });
    countResult.appendChild(firstPageButton);

    // Create pagination buttons
    if (totalPages <= 5) {
      for (let i = 1; i <= totalPages; i += 1) {
        countResult.appendChild(createButton(i, i));
      }
    } else if (currentPage <= 3) {
      for (let i = 1; i <= 3; i += 1) {
        countResult.appendChild(createButton(i, i));
      }
      countResult.appendChild(createEllipsis());
      countResult.appendChild(createButton(totalPages, totalPages));
    } else if (currentPage >= totalPages - 2) {
      countResult.appendChild(createButton(1, 1));
      countResult.appendChild(createEllipsis());
      for (let i = totalPages - 2; i <= totalPages; i += 1) {
        countResult.appendChild(createButton(i, i));
      }
    } else {
      countResult.appendChild(createButton(1, 1));
      countResult.appendChild(createEllipsis());
      for (let i = currentPage - 1; i <= currentPage + 1; i += 1) {
        countResult.appendChild(createButton(i, i));
      }
      countResult.appendChild(createEllipsis());
      countResult.appendChild(createButton(totalPages, totalPages));
    }

    // Create next page button
    const nextPageButton = document.createElement('p');
    nextPageButton.innerHTML = '<i class="fa-regular fa-chevron-right"></i>';
    nextPageButton.addEventListener('click', () => {
      if (currentPage < totalPages) {
        currentPage += 1;
        renderItems();
        renderPagination();
      }
    });
    countResult.appendChild(nextPageButton);

    // Create last page button
    const lastPageButton = document.createElement('p');
    lastPageButton.innerHTML = '<i class="fa-regular fa-chevrons-right"></i>';
    lastPageButton.addEventListener('click', () => {
      currentPage = totalPages;
      renderItems();
      renderPagination();
    });
    countResult.appendChild(lastPageButton);

    renderItems();
    // Get the p tag with the i tag that has the class "fa-chevrons-left"
    const doublePreviousPageButton = block.querySelector('.count-result p i.fa-chevrons-left').parentElement;
    const doubleforwardPageButton = block.querySelector('.count-result p i.fa-chevrons-right').parentElement;
    const PreviousPageButton = block.querySelector('.count-result p i.fa-chevron-left').parentElement;
    const forwardPageButton = block.querySelector('.count-result p i.fa-chevron-right').parentElement;

    // Get the first button
    const firstButton = block.querySelector('.count-result button');
    // Get all buttons
    const buttons = block.querySelectorAll('.count-result button');
    // get last button
    const lastButton = block.querySelector('.count-result button:last-of-type');
    // get the second & last before button
    const secondButton = buttons[1];
    const lastButtonBeforeLast = buttons[buttons.length - 2];

    // Check if the first button has the class "active"
    if (firstButton.classList.contains('active')) {
      // Add the class "dp-blur" to the p tag
      PreviousPageButton.classList.add('dp-blur');
    } else {
      // Remove the class "dp-blur" from the p tag
      PreviousPageButton.classList.remove('dp-blur');
    }

    // Check if the first button has the class "active"
    if (firstButton.classList.contains('active') || secondButton.classList.contains('active')) {
      // Add the class "dp-none" to the p tag
      doublePreviousPageButton.classList.add('dp-none');
    } else {
      // Remove the class "dp-none" from the p tag
      doublePreviousPageButton.classList.remove('dp-none');
    }
    // Check if the last button has the class "active"
    if (lastButton.classList.contains('active')) {
      // Add the class "dp-blur" to the p tag
      forwardPageButton.classList.add('dp-blur');
    } else {
      // Remove the class "dp-blur" from the p tag
      forwardPageButton.classList.remove('dp-blur');
    }

    // Check if the first button has the class "active"
    if (lastButton.classList.contains('active') || lastButtonBeforeLast.classList.contains('active')) {
      // Add the class "dp-none" to the p tag
      doubleforwardPageButton.classList.add('dp-none');
    } else {
      // Remove the class "dp-none" from the p tag
      doubleforwardPageButton.classList.remove('dp-none');
    }
  }
  if (json.data.length > 10) {
    renderPagination();
  } else {
    renderItems();
  }
}
