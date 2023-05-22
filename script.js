let div = document.createElement('div');
div.classList.add('item');
let containderDiv = document.querySelector('.container');
containderDiv.appendChild(div);

let submitButton = document.getElementById('button');

submitButton.addEventListener('click', displayItem);

function displayItem() {
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('img').value;
    console.log("hello");
    let html = `<div class = "card">
                    <img src= "${image}">
                    <div class="container">
                        <div class="name">${name}</div>
                        <div class= "description"><i>${description}</i></div>
                        <div class="price">${price}</div>
                    </div>
                    <div class="div-remove-card">
                        <button class="remove-card">X</button>
                    </div>
                </div>`;

        div.insertAdjacentHTML('beforeend', html);

}