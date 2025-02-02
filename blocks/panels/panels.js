const setEqualHeights = (elements) => {
    const maxHeight = Math.max(...elements.map(el => el.clientHeight));
    elements.forEach(el => {
        el.style.height = `${maxHeight}px`;        
    });
};
export default async function decorate(block) {
    const children = Array.from(block.children);
    children.forEach(col => {
        const wrapper = document.createElement('div');
        wrapper.classList.add('panels-col');
        col.classList.add('panels-item');
        col.parentNode.insertBefore(wrapper, col);
        wrapper.appendChild(col);

        const [topSection, bottomSection, labelSection, collapsibleSection] = col.children;
        topSection?.classList.add('panels-top-section');
        bottomSection?.classList.add('panels-bottom-section');
        collapsibleSection?.classList.add('panels-toggle-section');

        if (labelSection?.children.length) {
            col.classList.add('panels-item-has-label');
            labelSection.classList.add('panels-label-section');
        }
        if (collapsibleSection?.children.length) {
            collapsibleSection.classList.add('panels-toggle-section-auto');
        }
    });
    const topSections = Array.from(block.querySelectorAll(".panels-top-section"));
    const bottomSections = Array.from(block.querySelectorAll(".panels-bottom-section"));
    [...topSections, ...bottomSections].forEach(el => {
        el.removeAttribute("style");
    });
    setTimeout(() => {
        setEqualHeights(topSections);
        setEqualHeights(bottomSections);
    }, 1);
    window.addEventListener('resize', () => {
        [...topSections, ...bottomSections].forEach(el => {
            el.removeAttribute("style");
        });
        setTimeout(() => {
            setEqualHeights(topSections);
            setEqualHeights(bottomSections);
        }, 1);
    });
}
