let form = document.querySelector("#productInfo");
let name = document.querySelector("#productName");
let detail = document.querySelector("#productDetail");
let price = document.querySelector("#productPrice");
let print_1 = document.querySelector("#name");
let print_2 = document.querySelector("#detail");
let print_3 = document.querySelector("#price")


form.addEventListener("submit",(event ) =>{
    event.preventDefault()

    const productName = name.value
    const productDetail = detail.value
    const productPrice = price.value

    print_1.innerHTML = `Product Name: ${productName} `;
    print_2.innerHTML = `Product Detail: ${productDetail}`;
    print_3.innerHTML = `Product Price; ${productPrice}`;


})
