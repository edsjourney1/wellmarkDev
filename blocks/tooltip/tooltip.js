import { computePosition, flip, shift, offset, arrow } from 'https://cdn.jsdelivr.net/npm/@floating-ui/dom@1.6.13/+esm';

const tooltipComponents = Array.from(document.querySelectorAll(`.tooltip`));
const tooltipsBlocksArr = [];
const tooltipsMainArr = [];

let areTooltipsCounted = false;

export default async function decorate(block) {
    const thisblock = block;
    tooltipsBlocksArr.push(thisblock);
    if (!areTooltipsCounted && tooltipComponents.length === tooltipsBlocksArr.length) {
        areTooltipsCounted = true;
        initializeTooltips();
    }
};

const updateTooltipPosition = (obj) => {
  computePosition(obj.link, obj.tooltipEl, {
    placement: 'top',
    middleware: [
        offset(6),
        flip(),
        shift({padding: 5}),
        arrow({element: obj.arrowEl}),
    ],
  }).then(({x, y, placement, middlewareData}) => {
    Object.assign(obj.tooltipEl.style, {
      left: `${x}px`,
      top: `${y}px`,
    });
    
    const {x: arrowX, y: arrowY} = middlewareData.arrow;

    const staticSide = {
      top: 'bottom',
      right: 'left',
      bottom: 'top',
      left: 'right',
    }[placement.split('-')[0]];
   
    Object.assign(obj.arrowEl.style, {
      left: arrowX != null ? `${arrowX}px` : '',
      top: arrowY != null ? `${arrowY}px` : '',
      right: '',
      bottom: '',
      [staticSide]: '-4px',
    });
  });
};

const showTooltip = (obj) => {
  obj.tooltipEl.classList.add("tooltip-wrapper-active");
  obj.isActive = true;
  updateTooltipPosition(obj);
};

const hideTooltip = (index) => {
  // console.log("==============index", index);
  // currentActiveTooltip = null;
  // currentActiveTooltipArr[index].tooltipEl.classList.remove("tooltip-wrapper-active");
  // console.log("============currentActiveTooltipArr 1", currentActiveTooltipArr);
  // currentActiveTooltipArr.splice(index, 1);
  // console.log("============currentActiveTooltipArr 2", currentActiveTooltipArr);
};

const initializeTooltips = () => {
    const allTooltipLinks = Array.from(document.querySelectorAll(`a[href^='#tooltip-']`));
    const tooltipArr = [];
    let tooltipNode;
    allTooltipLinks.forEach((link) => {
        tooltipNode = tooltipsBlocksArr.find((el) => el.classList.contains(link.getAttribute('href').substring(1)));
        const tooltipObj = {
            link,
            tooltipEl: tooltipNode ? tooltipNode.parentNode : null
        };
        tooltipArr.push(tooltipObj);
    });
    setTimeout(() => {
        tooltipArr.forEach((obj, index) => {
            if (obj.tooltipEl && obj.link) {
                const genId = `tooltip_${Math.random().toString(16).slice(2)}_${index}`;
                obj.link.classList.add("tooltip-link");
                obj.link.setAttribute('aria-describedby', genId);
                obj.tooltipEl.setAttribute('role', 'tooltip');
                obj.tooltipEl.setAttribute('id', genId);
    
                const arrowEl = document.createElement('div');
                arrowEl.classList.add('tooltip-arrow');
                obj.tooltipEl.append(arrowEl);
                obj.arrowEl = arrowEl;
                obj.index = index;
                obj.isActive = false;
        
                updateTooltipPosition(obj);

                obj.link.addEventListener('click', (event) => {
                  event.preventDefault();
                  showTooltip(obj);
                });

                tooltipsMainArr.push(obj);
            }
        });

        document.addEventListener('click', (event) => {
          let withinBoundaries;
          tooltipsMainArr.forEach((tEl) => {
            withinBoundaries = event.composedPath().includes(tEl);
            console.log("==========withinBoundaries", withinBoundaries, tEl.isActive);
          });
          // let withinBoundaries = event.composedPath().includes(tooltipsMainArr[activeIndex]);
          // if (!withinBoundaries) {
          //   // hideTooltip(activeIndex);
          // };
        });
    }, 100);
};