let buttons = document.querySelectorAll('.block-button');
let tabContents = document.querySelectorAll('.block-text');

function setActiveItem(index, items) {
    items.forEach((item, itemIndex) => {
        index === itemIndex
            ? item.classList.add('active')
            : item.classList.remove('active')
    })
}


buttons.forEach((button, index) => {
    button.addEventListener('click', () => {
        setActiveItem(index, buttons);
        setActiveItem(index, tabContents);
    });
});
