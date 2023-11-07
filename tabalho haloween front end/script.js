const carrinho = document.getElementById("img")

const button = document.getElementsByTagName("button")
let car= 0
const info = document.getElementById("informacao")


for (let index = 0; index < button.length; index++) {
   button[index].addEventListener("click",function(){

    info.showModal() 
     car++
     carrinho.style.transform = "scale(2.7)";
     carrinho.innerHTML = car

     
    
     setTimeout(() => {
         info.close()
         carrinho.style.transform = "scale(1)";
     }, 1000);
    
 })
    
}





