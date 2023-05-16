const btn = document.querySelector('button');

btn.addEventListener('click', () => {
    const inputValue = document.querySelector('input').value;
    if (inputValue > 0 && inputValue < 11) {
        useRequest(inputValue);
    }
    else
        console.log('Введите число от 1 до 10');
});

function useRequest(inputValue) {
    const url = 'https://picsum.photos/v2/list?limit='+inputValue;
    let xhr = new XMLHttpRequest();
    xhr.open('get', url);
    xhr.send();
}