import sampleData from './sample-data.js';

const searchParent = document.querySelector('.search-container');
const allSearchItems = Array.from(document.querySelectorAll('.search-wrapper'));
const allSearchBlocks = [];
let searchGrid;
let searchLeftCol;
let searchRightCol;

const generateFacetId = (key1, num1, key2, num2) => {
  let str = key1.split(' ').join('_').split('-').join('_');
  if (key2) {
    str += `_${key2.split(' ').join('_').split('-').join('_')}`;
  }
  if (num1) {
    str += `_${num1}`;
  }
  if (num2) {
    str += `_${num2}`;
  }
  return str;
};

const updateHeights = () => {
  setTimeout(() => {
    let pTag;
    let hiddenTag;
    Array.from(searchRightCol.querySelectorAll('ul > li')).forEach((liTag) => {
      pTag = liTag.querySelector('p');
      hiddenTag = liTag.querySelector('input[type=hidden');
      if (pTag && hiddenTag) {
        pTag.innerHTML = hiddenTag.value;
        if (pTag.clientHeight > 50) {
          while (pTag.clientHeight > 50) {
            pTag.innerHTML = pTag.innerHTML.substr(0, pTag.innerHTML.length - 1);
          }
          pTag.innerHTML = `${pTag.innerHTML.substr(0, pTag.innerHTML.length - 5)}...`;
        }
      }
    });
  }, 5);
};

const buildSearchGrid = () => {
  if (searchGrid && searchLeftCol && searchRightCol) {
    (sampleData.filters || []).forEach((category, i1) => {
      const ul = document.createElement('ul');
      const isAnyFacetSelected = (category.facets || []).find((facet) => facet.selected);
      ul.innerHTML = `
        <li><h3>${category.title}</h3></li>
        <li><input id='${generateFacetId(category.key, i1 + 1)}'
          type='checkbox' name='${category.key}' data-value='all' ${isAnyFacetSelected ? '' : 'checked'}>
          <label for='${generateFacetId(category.key, i1 + 1)}'>
            All
            <i class="fa-solid fa-check"></i>
          </label>
        </li>`;
      (category.facets || []).forEach((facet, i2) => {
        ul.innerHTML += `<li>
          <input id='${generateFacetId(category.key, i1 + 1, facet.value, i2 + 1)}'
            type='checkbox' name='${category.key}' data-value='${facet.value}' ${facet.selected ? 'checked' : ''}>
            <label for='${generateFacetId(category.key, i1 + 1, facet.value, i2 + 1)}'>
              ${facet.title}
              <i class="fa-solid fa-check"></i>
            </label>
        </li>`;
      });
      searchLeftCol.append(ul);
    });

    const [searchHeadTerm, searchFootTerm] = allSearchBlocks[1].children;

    let searchHeadTermStr = searchHeadTerm.querySelector('p')?.innerHTML || '';
    let searchFootTermStr = searchFootTerm.querySelector('p')?.innerHTML || '';

    const { currentPage, pageSize, totalSize } = sampleData;

    searchHeadTermStr = searchHeadTermStr.replaceAll('{{1}}', ((currentPage - 1) * pageSize) + 1);
    searchHeadTermStr = searchHeadTermStr.replaceAll('{{2}}', (currentPage * pageSize) > totalSize ? totalSize : (currentPage * pageSize));
    searchHeadTermStr = searchHeadTermStr.replaceAll('{{3}}', totalSize);
    searchHeadTermStr = searchHeadTermStr.replaceAll('{{4}}', `<strong>"${sampleData.q}"</strong>`);

    searchFootTermStr = searchFootTermStr.replaceAll('{{1}}', ((currentPage - 1) * pageSize) + 1);
    searchFootTermStr = searchFootTermStr.replaceAll('{{2}}', (currentPage * pageSize) > totalSize ? totalSize : (currentPage * pageSize));
    searchFootTermStr = searchFootTermStr.replaceAll('{{3}}', totalSize);

    searchHeadTerm.innerHTML = searchHeadTermStr;
    searchFootTerm.innerHTML = searchFootTermStr;

    const searchList = document.createElement('ul');
    let str = '';
    let pdfStr = '';
    (sampleData.data || []).forEach((item) => {
      pdfStr = '';
      if (item.isPDF) {
        pdfStr = `<span class='icon icon-regular--file-pdf'>
          <i class='fa-regular fa-file-pdf' data-icon-name='regular--file-pdf'></i>
        </span>`;
      }
      str += `<li>
        <a href='${item.link}'><h3>${item.title} ${pdfStr}</h3></a>
        <input type='hidden' value='${item.description}'/>
        <div class='search-results-desc'><p>${item.description}</p></div>
        <cite>${item.url}</cite>
      </li>`;
    });
    searchList.innerHTML = str;

    searchRightCol.append(searchHeadTerm);
    searchRightCol.append(searchList);
    searchRightCol.append(searchFootTerm);

    updateHeights();
  }
};

const buildSearchBanner = (bannerBlock) => { // bannerBlock, bannerEl, searchGrid
  const searchFormParent = document.createElement('div');
  const searchLabelWrapper = bannerBlock.querySelector(':scope > div:last-child');
  if (searchLabelWrapper) {
    const [searchLabel, ctaLabel] = searchLabelWrapper.children;
    searchFormParent.innerHTML = `<form><div class='search-form-grid'>
      <div class='search-form-col'>
        <div class='search-form-input'>
          <i class='fa-solid fa-magnifying-glass'></i>
          <label for='search_term'>${searchLabel.querySelector('p').innerHTML}</label>
          <input id='search_term' placeholder='${searchLabel.querySelector('p').innerHTML}' type='search'/>
        </div>
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

window.addEventListener('resize', updateHeights);
