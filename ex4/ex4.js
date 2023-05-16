const btn = document.querySelector('.requestBtn');
const resultField = document.querySelector('.result');

btn.addEventListener('click', () => {
    const firstInput = document.querySelector('.firstInput').value;
    const secondInput = document.querySelector('.secondInput').value;

    if ((firstInput >= 100 && firstInput <= 300) && (secondInput >= 100 && secondInput <= 300)) {
        fetch(`https://picsum.photos/${firstInput}/${secondInput}`)
            .then((response) => displayImg(response));
    }
    else
            resultField.innerHTML = 'Одно из чисел вне диапазона от 100 до 300';
});

function displayImg(data) {
    resultField.innerHTML = `<img src="${data.url}">`;
}