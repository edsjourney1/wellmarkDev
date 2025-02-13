/*
 * Table Block
 * Recreate a table
 * https://www.hlx.live/developer/block-collection/table
 */

function buildCell(rowIndex) {
  const cell = rowIndex
    ? document.createElement("td")
    : document.createElement("th");
  if (!rowIndex) cell.setAttribute("scope", "col");
  return cell;
}

export default async function decorate(block) {
  const table = document.createElement("table");
  const thead = document.createElement("thead");
  const tbody = document.createElement("tbody");

  // if header class present
  const header = !block.classList.contains("no-header");
  // if footer class present
  const footer = block.classList.contains("table-footer");
  //create tfoot if footer class present
  const tfoot = footer ? document.createElement("tfoot") : null;
  const rowslength = block.children.length;

  if (header) table.append(thead);
  if (footer) table.append(tfoot);
  table.append(tbody);

  [...block.children].forEach((child, i) => {
    const row = document.createElement("tr");
    if (header && i === 0) thead.append(row);
    //if footer present and it's last child, append row(tr) in tfoot
    else if (footer && i === rowslength - 1) tfoot.append(row);
    else tbody.append(row);

    [...child.children].forEach((col) => {
      //<tr> ... </tr>
      const cell = buildCell(header ? i : i + 1);
      cell.innerHTML = col.innerHTML;
      row.append(cell);
    });
  });
  block.innerHTML = "";
  block.append(table);
}
