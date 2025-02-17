export default function decorate(block) {
  const svgIcon = block.children[3]?.children[0]?.children[0];
  const title = block.children[0]?.textContent;
  const description = block.children[1]?.textContent;
  const div = document.createElement('div');
  div.classList.add('main-div');
  const div2 = document.createElement('div');
  div2.classList.add('heading-icon-div');
  const svg = svgIcon;
  const heading = document.createElement('h2');
  heading.append(title);
  heading.classList.add('title');
  if (block.children[3] === '' || block.children[3] === undefined) {
    div2.append(heading);
  } else {
    div2.append(svg, heading);
  }
  const paragraph = document.createElement('p');
  paragraph.classList.add('description');
  paragraph.append(description);
  div.append(div2, paragraph);
  if (block.children[2] !== '' && block.children[2] !== null && block.children[2] !== undefined) {
    const button = block.children[2]?.children[0]?.children[0]?.children[0]?.children[0];
    button.classList.add('button', 'secondary');
    div.append(div2, paragraph, button);
  }
  if (block.children[2] === '' || block.children[2] === undefined) {
    svg.classList.add('svg');
  }
  block.innerHTML = '';
  block.append(div);
}
