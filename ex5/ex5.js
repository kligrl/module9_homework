const btn = document.querySelector('.requestBtn');
const clearLSBtn = document.querySelector('.clearLS');
const result = document.querySelector('.result');

result.innerHTML = localStorage.getItem('imgLS');

btn.addEventListener('click', () => {
    const pageNumber = document.querySelector('.pageNumberInput').value;
    const limit = document.querySelector('.limitInput').value;

    if ((pageNumber < 1 || pageNumber > 10 || isNaN(pageNumber)) && (limit >= 1 && limit <= 10))
        result.innerHTML = 'Номер страницы вне диапазона от 1 до 10';
    else if ((pageNumber >= 1 && pageNumber <= 10) && (limit < 1 || limit > 10 || isNaN(limit)))
        result.innerHTML = 'Лимит вне диапазона от 1 до 10';
    else if ((pageNumber < 1 || pageNumber > 10 || isNaN(pageNumber)) && (limit < 1 || limit > 10 || isNaN(limit)))
        result.innerHTML = 'Номер страницы и лимит вне диапазона от 1 до 10';
    else {
        const url = `https://picsum.photos/v2/list?page=${pageNumber}&limit=${limit}`;
        useRequest(url, displayResult);
    }
});

function useRequest(url, callback) {
    fetch(url)
        .then((response) => {return response.json(); })
        .then((data) => callback(data));
}

function displayResult(apiData) {
    let content = '';
    apiData.forEach(item => {
        const divContent = `
            <img
                src="${item.download_url}"
                width="200px"
                height="150px"
            />
        `;
        content += divContent;
    });
    result.innerHTML = content;

    localStorage.setItem('imgLS', content);
}

clearLSBtn.addEventListener('click', () => {
    localStorage.removeItem('imgLS');
    result.innerHTML = '';
})