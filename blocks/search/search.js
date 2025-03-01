import sampleData from"./sample-data.js";let searchParent=document.querySelector(".search-container"),allSearchItems=Array.from(document.querySelectorAll(".search-wrapper")),allSearchBlocks=[],searchGrid,searchLeftCol,searchRightCol,generateFacetId=(e,a,r,l)=>{let t=e.split(" ").join("_").split("-").join("_");return r&&(t+="_"+r.split(" ").join("_").split("-").join("_")),a&&(t+="_"+a),l&&(t+="_"+l),t},updateHeights=()=>{setTimeout(()=>{let a,r;Array.from(searchRightCol.querySelectorAll("ul > li")).forEach(e=>{if(a=e.querySelector("p"),r=e.querySelector("input[type=hidden"),a&&r&&(a.innerHTML=r.value,50<a.clientHeight)){for(;50<a.clientHeight;)a.innerHTML=a.innerHTML.substr(0,a.innerHTML.length-1);a.innerHTML=a.innerHTML.substr(0,a.innerHTML.length-5)+"..."}})},5)},buildSearchGrid=()=>{if(searchGrid&&searchLeftCol&&searchRightCol){(sampleData.filters||[]).forEach((r,l)=>{let t=document.createElement("ul");var e=(r.facets||[]).find(e=>e.selected);t.innerHTML=`
        <li><h3>${r.title}</h3></li>
        <li><input id='${generateFacetId(r.key,l+1)}'
          type='checkbox' name='${r.key}' data-value='all' ${e?"":"checked"}>
          <label for='${generateFacetId(r.key,l+1)}'>
            All
            <i class="fa-solid fa-check"></i>
          </label>
        </li>`,(r.facets||[]).forEach((e,a)=>{t.innerHTML+=`<li>
          <input id='${generateFacetId(r.key,l+1,e.value,a+1)}'
            type='checkbox' name='${r.key}' data-value='${e.value}' ${e.selected?"checked":""}>
            <label for='${generateFacetId(r.key,l+1,e.value,a+1)}'>
              ${e.title}
              <i class="fa-solid fa-check"></i>
            </label>
        </li>`}),searchLeftCol.append(t)});var[t,i]=allSearchBlocks[1].children;let e=t.querySelector("p")?.innerHTML||"",a=i.querySelector("p")?.innerHTML||"";var{currentPage:c,pageSize:s,totalSize:n}=sampleData,c=(e=(e=(e=(e=e.replaceAll("{{1}}",(c-1)*s+1)).replaceAll("{{2}}",n<c*s?n:c*s)).replaceAll("{{3}}",n)).replaceAll("{{4}}",`<strong>"${sampleData.q}"</strong>`),a=(a=(a=a.replaceAll("{{1}}",(c-1)*s+1)).replaceAll("{{2}}",n<c*s?n:c*s)).replaceAll("{{3}}",n),t.innerHTML=e,i.innerHTML=a,document.createElement("ul"));let r="",l="";(sampleData.data||[]).forEach(e=>{l="",e.isPDF&&(l=`<span class='icon icon-regular--file-pdf'>
          <i class='fa-regular fa-file-pdf' data-icon-name='regular--file-pdf'></i>
        </span>`),r+=`<li>
        <a href='${e.link}'><h3>${e.title} ${l}</h3></a>
        <input type='hidden' value='${e.description}'/>
        <div class='search-results-desc'><p>${e.description}</p></div>
        <cite>${e.url}</cite>
      </li>`}),c.innerHTML=r,searchRightCol.append(t),searchRightCol.append(c),searchRightCol.append(i),updateHeights()}},buildSearchBanner=e=>{var a,r=document.createElement("div"),l=e.querySelector(":scope > div:last-child");l&&([l,a]=l.children,r.innerHTML=`<form><div class='search-form-grid'>
      <div class='search-form-col'>
        <div class='search-form-input'>
          <i class='fa-solid fa-magnifying-glass'></i>
          <label for='search_term'>${l.querySelector("p").innerHTML}</label>
          <input id='search_term' placeholder='${l.querySelector("p").innerHTML}' type='search'/>
        </div>
      </div>
      <div class='search-form-col'>
        <button type='submit'>${a.querySelector("p").innerHTML}</button>
      </div>
    </div></form>`,e.append(r))},initSearch=()=>{var e=document.createElement("section");searchGrid=document.createElement("div"),searchLeftCol=document.createElement("div"),searchRightCol=document.createElement("div"),e.classList.add("search-grid-wrapper"),searchGrid.classList.add("search-grid"),searchLeftCol.classList.add("search-filters"),searchRightCol.classList.add("search-results"),buildSearchBanner(allSearchBlocks[0],searchGrid),searchGrid.append(searchLeftCol),searchGrid.append(searchRightCol),e.append(searchGrid),searchParent.parentElement.append(e),buildSearchGrid()};export default async function decorate(e){e.classList.contains("search-banner")?(e.querySelector(":scope > div:last-child")?.classList.add("search-hidden"),e.querySelector(":scope > div:last-child")?.setAttribute("aria-hidden",!0)):(e.classList.add("search-hidden"),e.setAttribute("aria-hidden",!0)),allSearchBlocks.push(e),allSearchItems.length===allSearchBlocks.length&&initSearch()}window.addEventListener("resize",updateHeights);