const menuEmail = document.querySelector('.navbar-email');
const menuMobile = document.querySelector('.menu');
const DesktopMenu = document.querySelector('.desktop-menu');
const VersMobile = document.querySelector('.mobile-menu');
const menuCarroComras = document.querySelector('.navbar-shopping-cart');
const detallesCompras = document.querySelector('#ShoppingAside');
const listaProductos = document.querySelector('.cards-container');
const detallesProductos = document.querySelector('#descriptionProduct');



menuEmail.addEventListener('click', toggleDesktopMenu)

function toggleDesktopMenu(){
    detallesCompras.classList.add('inactive')
    DesktopMenu.classList.toggle("inactive");

}

menuMobile.addEventListener('click', toggleMobileMenu)
function toggleMobileMenu(){
    
    detallesCompras.classList.add('inactive')
    VersMobile.classList.toggle("inactive");
}

menuCarroComras.addEventListener('click',toggleDetailsCarro)
function toggleDetailsCarro(){
    DesktopMenu.classList.add('inactive')
    VersMobile.classList.add('inactive')
    detallesCompras.classList.toggle('inactive')
}



const productList = [];
productList.push({
    name: "Bicicleta",
    precio: 120,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Moto",
    precio: 500,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});
productList.push({
    name: "Carro",
    precio: 1000,
    imagen: "https://images.pexels.com/photos/276517/pexels-photo-276517.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
});

function addProduct(arrayList){
    for(producto of productList){
        var productCard = document.createElement('div');
        productCard.classList.add('product-card');
    
        
    
        var productImg = document.createElement('img');
        productImg.setAttribute('src',producto.imagen);
    
    
        var productInfo = document.createElement('div');
        productInfo.classList.add('product-info');
    
       
    
    
        var divGeneral = document.createElement('div');
        
        var precio = document.createElement('p');
        precio.innerText= '$' + producto.precio;
        var nameProduct = document.createElement('p');
        nameProduct.innerText= producto.name;
    
        divGeneral.append(precio,nameProduct);
    
    
        var FiguraCar = document.createElement('figure');
    
        var imagenCar = document.createElement('img');
        imagenCar.setAttribute('src',"./icons/bt_add_to_cart.svg");
    
        FiguraCar.appendChild(imagenCar);
    
        productInfo.append(divGeneral,FiguraCar);
    
        productCard.append(productImg,productInfo);
    
    
        listaProductos.appendChild(productCard);
    
    
    }
}

addProduct(productList)

const TargetaProduct = document.querySelector('.product-card');

TargetaProduct.addEventListener('click',toggleDecriptionProduct)
function toggleDecriptionProduct(){

    detallesProductos.classList.toggle('inactive')
}