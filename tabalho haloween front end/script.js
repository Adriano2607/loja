const carrinho = document.getElementById("carrinho")

const button = document.getElementById("button")
let car= 0
const info = document.getElementById("informacao")


button.addEventListener("click",function(){



   info.showModal() 
    car++
    carrinho.innerHTML = "qtd:" +car
   
    setTimeout(() => {
        info.close()
    }, 4000);
   
})





