let div = document.createElement('div'); // https://www.youtube.com/watch?v=R1liBYYF9k4&t=204s&ab_channel=procademy
div.classList.add('item');
let containderDiv = document.querySelector('.container');
containderDiv.appendChild(div);

let totalItems = 3;

document.getElementById("randomNumber").innerHTML = totalItems;

let initialJSONString = `[
    
            {
                "name": "Banana",
                "description": "Yellow Fruit",
                "price": "2",
                "img": "https://product-images.metro.ca/images/hcd/h4d/8874222256158.jpg"
            },
            {
                "name": "Apple",
                "description": "Red Fruit",
                "price": "1",
                "img": "https://i5.walmartimages.ca/images/Enlarge/094/514/6000200094514.jpg"
            },
            {
                "name": "Orange",
                "description": "Orange Fruit",
                "price": "2",
                "img": "https://i5.walmartimages.ca/images/Enlarge/234/6_r/6000191272346_R.jpg"
            }

        ]`

let json1 = JSON.parse(initialJSONString);


for (let item = 0; item < json1.length; item++) { 
    let name1 = json1[item]["name"];
    let description1 = json1[item]["description"];
    let price1 = json1[item]["price"];
    let img1 = json1[item]["img"];
    console.log(name1); // https://www.youtube.com/watch?v=R1liBYYF9k4&t=204s&ab_channel=procademy
    let html1 = `<div class = "card"> 
    <img src= "${img1}" required>
    <div class="container">
        <div class="name" required>${name1}</div>
        <div class= "description" required><i>${description1}</i></div>
        <div class="price" required>$${price1}</div>
    </div>
    <div class="div-remove-card">
        <button class="remove-card" id="remove-card-${item}">X</button>
    </div>
</div>`

div.insertAdjacentHTML('beforeend', html1);

document.querySelector('#remove-card-' + item).addEventListener( // https://www.youtube.com/watch?v=0aWGMxrdUZE&t=255s&ab_channel=procademy
'click', function() {
    let confirmation = confirm('Please confirm if you want to delete this item.');
    if (confirmation) {
    let elementToRemove = this.parentNode.parentNode;
    elementToRemove.setAttribute("id", "hel");
    console.log(elementToRemove);
    div.removeChild(elementToRemove);
    }
});



}
//console.log(json1[0]["name"]);

let submitButton = document.getElementById('button');

let i = 3;

submitButton.addEventListener('click', addItem);

let resetAllButton = document.getElementById('resetAll');
resetAllButton.addEventListener('click', deleteAll);


function addItem() {
    let name = document.getElementById('name').value;
    let description = document.getElementById('description').value;
    let price = document.getElementById('price').value;
    let image = document.getElementById('img').value;
    console.log("hello");
    if (name == "" || description == ""  || price == "" || image == "") { // Check if all entries are filled out
        alert("All entries must be filled out");
        return;
    } // https://www.youtube.com/watch?v=R1liBYYF9k4&t=204s&ab_channel=procademy
    let html = `<div class = "card"> 
                    <img src= "${image}" required>
                    <div class="container">
                        <div class="name" required>${name}</div>
                        <div class= "description" required><i>${description}</i></div>
                        <div class="price" required>$${price}</div>
                    </div>
                    <div class="div-remove-card">
                        <button class="remove-card" id="remove-card-${i}">X</button>
                    </div>
                </div>`;

              
                   
       
                    

        div.insertAdjacentHTML('beforeend', html);
        totalItems++;
        document.getElementById("randomNumber").innerHTML = totalItems;

         document.querySelector('#remove-card-' + i).addEventListener( // https://www.youtube.com/watch?v=0aWGMxrdUZE&t=255s&ab_channel=procademy
            'click', function() {
                let confirmation = confirm('Please confirm if you want to delete this item.');
                if (confirmation) {
                let elementToRemove = this.parentNode.parentNode;
                div.removeChild(elementToRemove);
                totalItems--;
                document.getElementById("randomNumber").innerHTML = totalItems;
                }
            });
         
           
            i++;

}








function deleteAll() { // https://stackoverflow.com/questions/10842471/how-to-remove-all-elements-of-a-certain-class-from-the-dom
    let paras = document.getElementsByClassName('card');
    console.log(paras);
    while(paras[0]) {
        paras[0].parentNode.removeChild(paras[0]);
    }
    totalItems = 0;
    document.getElementById("randomNumber").innerHTML = totalItems;
    

    // for (let index = 0; index <= i; index++) {
    //     document.querySelector('#remove-card-' + i).addEventListener(
    //         'click', function() {
    //             let elementToRemove = this.parentNode.parentNode;
    //             div.removeChild(elementToRemove);
    //         });
    // }
}

