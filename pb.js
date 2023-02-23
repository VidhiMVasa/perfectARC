

//cart
let cartIcon=document.querySelector("#cart-icon")
let cart=document.querySelector(".cart1")
let closeCart=document.querySelector("#close-cart")

cartIcon.onclick = () => {
    cart.classList.add("active");
    
}

closeCart.onclick = () => {
    cart.classList.remove("active");
}

var coll = document.getElementsByClassName("detailBtn");
var i;
for (i = 0; i < coll.length; i++) {
  coll[i].addEventListener("click", function() {
    this.classList.add("focus");
    // var body = document.getElementById('shop');
    // var otherContent = this.parentElement.parentElement.parentElement
    var content = this.nextElementSibling;
    if (content.style.display === "inline-block" ) {
      content.setAttribute('style','display:none !important')
    } 
    else {
      content.setAttribute('style','display:inline-block !important')
      content.style.width = "500px";
      content.style.backgroundColor = "rgba(0,0,0,0.7)";
      content.style.color = "white";
      content.style.padding = "10px"
      content.style.maxHeight = "400px";
      content.style.marginleft = "380px"       
      content.style.overflow = "auto";
      content.style.position = "absolute"
      content.style.zIndex = "5"
      content.style.fontSize = "0.9rem"
      content.style.borderRadius = "5%"
      content.style.fontFamily = "'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif"   
    }
  });
}

//cart-working
if(document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded',ready)
}
else{
    ready()
}
//making function
function ready(){

    //remove from cart
    var removeCartButton = document.getElementsByClassName('cart-remove')
    for(var i=0 ; i<removeCartButton.length ; i++){
        var button=removeCartButton[i]
        button.addEventListener('click', removeCartItem)
    }
    //quantity update
    var quantityInputs = document.getElementsByClassName('cart-quantity')
    for(var i=0 ; i<quantityInputs.length ; i++){
        var input = quantityInputs[i]
        input.addEventListener('change', quantityChanged)
    }
    //add to cart
    var addCart = document.getElementsByClassName('add-cart')
    for(var i=0; i<addCart.length; i++){
        var button = addCart[i]
        button.addEventListener('click', addCartClicked)
    }
    //Buy Button
    document.getElementsByClassName('btn-buy')[0]
    .addEventListener('click',buyButtonClicked)
}   


//buy button
function buyButtonClicked(){
    alert('Your order is placed')
    var cartContent = document.getElementsByClassName('cart-content')[0]
    while(cartContent.hasChildNodes()){
        cartContent.removeChild(cartContent.firstChild)
    }
    updateTotal()
}
//Remove from cart
function removeCartItem(event){
    var buttonClicked = event.target
    buttonClicked.parentElement.remove()
    updateTotal()
}


//change quantity
function quantityChanged(event){
    var input = event.target
    
    if(isNaN(input.value) || input.value <= 0){
            input.value = 1
    }
    updateTotal()
}

function CheckStock(event){
    var input = event.target
    var StockName = input.previousElementSibling.previousElementSibling.innerText
    var productName = document.getElementsByClassName('productTitle')
    
    for(var i=0; i <=productName.length;i++){
        
        if(StockName == productName[i].innerText){
            
            var Stock = document.getElementsByClassName('ItemStock')[i].innerText
            
        }
        if(parseInt(input.value) > Stock){
            alert("available quantity in Stock is"+Stock+",Please update quantity")
            return
        }
    }
}

//Add to cart
function addCartClicked(event){
    var button = event.target
    var shopProduct = button.parentElement
    var title = shopProduct.getElementsByClassName('productTitle')[0].innerText;
    var price = shopProduct.getElementsByClassName('price')[0].innerText;
    var image = shopProduct.getElementsByClassName('productImg')[0].src    
    addProductToCart(title, price, image);
    updateTotal()  
}


function addProductToCart(title, price, image){
    var cartShopBox = document.createElement('div') 
    cartShopBox.classList.add('cart-box')   
    var cartItem = document.getElementsByClassName('cart-content')[0]
    var cartItemNames = cartItem.getElementsByClassName('cart-product-title')
    for(var i=0; i<cartItemNames.length; i++){
        if(cartItemNames[i].innerText == title){
        alert('You have already added this item to cart, to update quantity go to cart')
        return
        }
    }
    
    var cartBoxContent = 
                `<img src="${image}" alt="" class="cart-img">
                
                    <div class="cart-product-title">${title}</div>
                    <div class="cart-price">${price}</div>
                    <input type="number" value="1" class="cart-quantity" id="qty">
                
                <i class='bx bx-trash cart-remove'></i>`
    cartShopBox.innerHTML = cartBoxContent
    cartItem.append(cartShopBox)
    cartShopBox
    .getElementsByClassName('cart-remove')[0]
    .addEventListener('click',removeCartItem)

    cartShopBox
    .getElementsByClassName('cart-quantity')[0]
    .addEventListener('change',quantityChanged)
    
    cartShopBox.getElementsByClassName('cart-quantity')[0].addEventListener('change',CheckStock)
}

//Update price
function updateTotal(){
    var cartContent = document.getElementsByClassName('cart-content')[0]
    var cartBoxes = cartContent.getElementsByClassName('cart-box')
    var total = 0;
    for(var i = 0 ; i < cartBoxes.length ; i++){
        var cartBox = cartBoxes[i]
        var priceElement = cartBox.getElementsByClassName('cart-price')[0]
        var quantityElement = cartBox.getElementsByClassName('cart-quantity')[0]
        var price = parseFloat(priceElement.innerText.replace('Rs.', ''))
        var quantity = quantityElement.value;
        total = total + (price * quantity);
    }   
        total = Math.round(total * 100) / 100;
        document.getElementsByClassName('total-price')[0].innerText = "Rs" + total;
    


const cartCount=document.querySelector('.badge');
let count=cartBoxes.length;
cartCount.innerHTML=count;

if(count==0){
  cartCount.style.display='none';
}else{
  cartCount.style.display='block';
}
CheckStock()


}



