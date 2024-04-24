const list = document.querySelector('ul');
const input = document.querySelector('input');
const button = document.querySelector('button');

button.addEventListener("click", onClick);

function onClick() {
    const items = input.value;
    input.value = '';
    const listItem = document.createElement('li');
    const span = document.createElement('span');
    const button2 = document.createElement('button');
    listItem.appendChild(span);
    listItem.appendChild(button2);
    span.textContent = items;
    button2.textContent = 'Delete';
    list.appendChild(listItem);
    button2.addEventListener("click", () => {
        list.removeChild(listItem);
    });
    input.focus();
}