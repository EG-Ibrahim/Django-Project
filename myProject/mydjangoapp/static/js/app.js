let openShopping = document.querySelector('.shopping');
let closeShopping = document.querySelector('.closeShopping');
let list = document.querySelector('.list');
let listCard = document.querySelector('.listCard');
let body = document.querySelector('body');
let total = document.querySelector('.total');
let quantity = document.querySelector('.quantity');

openShopping.addEventListener('click', ()=>{
    body.classList.add('active');
})
closeShopping.addEventListener('click', ()=>{
    body.classList.remove('active');
})

let products = [
    {
        id: 1,
        name: 'Samsung S24 Ultra',
        image: 'SamsungS24ultra.png',
        price: 220000
    },
    {
        id: 2,
        name: 'Samsung S24',
        image: 'SamsungS24m.png',
        price: 240000
    },
    {
        id: 3,
        name: 'Samsung A55',
        image: 'SamsungA55.png',
        price: 140000
    },
    {
        id: 4,
        name: 'Samsung Z Fold 5',
        image: 'Samsung Z Fold5.png',
        price: 265000
    },
    {
        id: 5,
        name: 'Huawei P70 Ultra',
        image: 'Huawei P70 Ultra.png',
        price: 230000
    },
    {
        id: 6,
        name: 'Huawei Mate 50 pro',
        image: 'Huawei mate50pro.png',
        price: 235000
    },
    {
        id: 7,
        name: 'Huawei Nova 7i',
        image: 'Huawei Nova7i.png',
        price: 150000
    },
    {
        id: 8,
        name: 'Huawei Mate X3',
        image: 'Huawei mate x3.png',
        price: 255000
    },
    {
        id: 9,
        name: 'IPhone 14 Pro Max',
        image: 'IPhone 14 Pro Max.png',
        price: 300000
    },
    {
        id: 10,
        name: 'IPhone 15',
        image: 'IPhone 15.png',
        price: 320000
    },
    {
        id: 11,
        name: 'IPhone 15 Pro',
        image: 'IPhone 15 Pro.png',
        price: 330000
    },
    {
        id: 12,
        name: 'IPhone 15 Pro Max',
        image: 'IPhone 15 Pro Max.png',
        price: 350000
    },
    {
        id: 13,
        name: 'Xiaomi 14 Ultra',
        image: 'Xiaomi 14 Ultra.png',
        price: 240000
    },
    {
        id: 14,
        name: 'Xiaomi Mi 11',
        image: 'Xiaomi Mi 11.png',
        price: 210000
    },
    {
        id: 15,
        name: 'Xiaomi Mi 11 Pro',
        image: 'Xiaomi Mi 11 Pro.png',
        price: 220000
    },
    {
        id: 16,
        name: 'Xiaomi Redmi Note 14 Pro',
        image: 'Xiaomi Redmi Note 14 Pro.png',
        price: 190000
    },
    {
        id: 17,
        name: 'Galaxy Watch 4',
        image: 'Galaxy Watch 4.png',
        price: 120000
    },
    {
        id: 18,
        name: 'Samsung GalaxyBuds',
        image: 'earbuds.png',
        price: 110000
    },
    {
        id: 19,
        name: 'Huawei GT3 Pro',
        image: 'Huawei GT3pro.png',
        price: 110000
    },
    {
        id: 20,
        name: 'Huawei Buds 4i',
        image: 'Huawei buds 4i.png',
        price: 100000
    },
    {
        id: 21,
        name: 'Apple Watch 7',
        image: 'Apple Watch 7.png',
        price: 200000
    },
    {
        id: 22,
        name: 'Airpods 3rd Gen',
        image: 'Airpods 3rd Gen.png',
        price: 190000
    },
    {
        id: 23,
        name: 'Xiaomi Watch 2 Pro',
        image: 'Xiaomi Watch 2 Pro.png',
        price: 120000
    },
    {
        id: 24,
        name: 'Xiaomi Redmi Buds 5 Pro',
        image: 'Xiaomi Redmi Buds 5 Pro.png',
        price: 100000
    }
];

let listCards = [];

function initApp(){
    products.forEach((value, key) =>{
        let newDiv = document.createElement('div');
        newDiv.classList.add('item');
        newDiv.innerHTML = `
            <img src="/static/images/${value.image}">
            <div class="title">${value.name}</div>
            <div class="price">${value.price.toLocaleString()}</div>
            <button onclick="addToCard(${key})">Add To Card</button>`;
        list.appendChild(newDiv);
    })
}
initApp();
function addToCard(key){
    if(listCards[key] == null){
        // copy product form list to list card
        listCards[key] = JSON.parse(JSON.stringify(products[key]));
        listCards[key].quantity = 1;
    }
    reloadCard();
}
function reloadCard(){
    listCard.innerHTML = '';
    let count = 0;
    let totalPrice = 0;
    listCards.forEach((value, key)=>{
        totalPrice = totalPrice + value.price;
        count = count + value.quantity;
        if(value != null){
            let newDiv = document.createElement('li');
            newDiv.innerHTML = `
                <div><img src="/static/images/${value.image}"/></div>
                <div>${value.name}</div>
                <div>${value.price.toLocaleString()}</div>
                <div>
                    <button onclick="changeQuantity(${key}, ${value.quantity - 1})">-</button>
                    <div class="count">${value.quantity}</div>
                    <button onclick="changeQuantity(${key}, ${value.quantity + 1})">+</button>
                </div>`;
                listCard.appendChild(newDiv);
        }
    })
    total.innerText = totalPrice.toLocaleString();
    quantity.innerText = count;
}
function changeQuantity(key, quantity){
    if(quantity == 0){
        delete listCards[key];
    }else{
        listCards[key].quantity = quantity;
        listCards[key].price = quantity * products[key].price;
    }
    reloadCard();
}