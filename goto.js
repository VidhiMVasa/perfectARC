var gotobrands = document.getElementById('shop')
var gotocategories = document.getElementById('cate')

// document.getElementById('gotobrands').addEventListener('click',brands)
// document.getElementById('gotocategories').addEventListener('click',categories)

function brands(){
    // input = this.target
    // var gotobrands = document.getElementById('shop')
    // var gotocategories = document.getElementById('cate')
    
    gotobrands.style.display = 'block'
    gotocategories.style.display = 'none'
}
function categories(){
    // input = this.target
    // var gotobrands = document.getElementById('shop')
    // var gotocategories = document.getElementById('cate'
    gotocategories.style.display = 'block'
    gotobrands.style.display = 'none'
    
}