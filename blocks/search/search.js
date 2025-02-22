import sampleData from './sample-data.js';

const searchParent = document.querySelector('.search-container');
const allSearchItems = Array.from(document.querySelectorAll('.search-wrapper'));
const allSearchBlocks = [];
let searchGrid;
let searchLeftCol;
let searchRightCol;

const buildSearchGrid = () => {
  if (searchGrid && searchLeftCol && searchRightCol) {
    (sampleData.filters || []).forEach((category) => {
      const ul = document.createElement('ul');
      ul.innerHTML = `
        <li><h3>${category.title}</h3></li>
        <li><label><input type='checkbox' name='${category.key}' data-value='all'>All</label></li>`;
      (category.facets || []).forEach((facet) => {
        ul.innerHTML += `<li><label>
          <input type='checkbox' name='${category.key}' data-value='${facet.value}'>${facet.title}</label>
        </li>`;
      });
      searchLeftCol.append(ul);
    });

    const searchList = document.createElement('ul');
    let str = '';
    let pdfStr = '';
    (sampleData.data || []).forEach((item) => {
      pdfStr = '';
      if (item.isPDF) {
        pdfStr = `<span class="icon icon-regular--file-pdf">
          <i class="fa-regular fa-file-pdf" data-icon-name="regular--file-pdf"></i>
        </span>`;
      }
      str += `<li>
        <a href='${item.link}'><h3>${item.title} ${pdfStr}</h3></a>
        <div class='search-results-desc'><p>${item.description}</p></div>
        <cite>${item.url}</cite>
      </li>`;
    });
    searchList.innerHTML = str;
    searchRightCol.append(searchList);
  }
};

const buildSearchBanner = (bannerBlock) => { // bannerBlock, bannerEl, searchGrid
  const searchFormParent = document.createElement('div');
  const searchLabelWrapper = bannerBlock.querySelector(':scope > div:last-child');
  if (searchLabelWrapper) {
    const [searchLabel, ctaLabel] = searchLabelWrapper.children;
    searchFormParent.innerHTML = `<form><div class='search-form-grid'>
      <div class='search-form-col'>
        <label for='search_term'>${searchLabel.querySelector('p').innerHTML}</label>
        <input id='search_term' placeholder='${searchLabel.querySelector('p').innerHTML}' type='search'/>
      </div>
      <div class='search-form-col'>
        <button type='submit'>${ctaLabel.querySelector('p').innerHTML}</button>
      </div>
    </div></form>`;
    bannerBlock.append(searchFormParent);
  }
};

const initSearch = () => {
  const searchWrap = document.createElement('section');
  searchGrid = document.createElement('div');
  searchLeftCol = document.createElement('div');
  searchRightCol = document.createElement('div');
  searchWrap.classList.add('search-grid-wrapper');
  searchGrid.classList.add('search-grid');

  searchLeftCol.classList.add('search-filters');
  searchRightCol.classList.add('search-results');

  buildSearchBanner(allSearchBlocks[0], searchGrid);

  searchGrid.append(searchLeftCol);
  searchGrid.append(searchRightCol);
  searchWrap.append(searchGrid);
  searchParent.parentElement.append(searchWrap);

  buildSearchGrid();
};

export default async function decorate(block) {
  const thisBlock = block;
  if (!thisBlock.classList.contains('search-banner')) {
    thisBlock.classList.add('search-hidden');
    thisBlock.setAttribute('aria-hidden', true);
  } else {
    thisBlock.querySelector(':scope > div:last-child')?.classList.add('search-hidden');
    thisBlock.querySelector(':scope > div:last-child')?.setAttribute('aria-hidden', true);
  }
  allSearchBlocks.push(thisBlock);

  if (allSearchItems.length === allSearchBlocks.length) {
    initSearch();
  }
}
