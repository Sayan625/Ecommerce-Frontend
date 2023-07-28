// refence of item incrementer, decrementer and counter
const counter=document.getElementById("itemCounter")
const decrementor=document.getElementById("decrementor")
const incrementor=document.getElementById("incrementor")

// reference of item price
const price=document.getElementById("price")

//reference of item cost, shipping cost and total cost
const itemCost=document.getElementById("itemCost")
const shippingCost=document.getElementById("shippingCost")
const total=document.getElementById("total")

// initiation of the cost in summery
Setprice()

// incrementor click event listener
incrementor.addEventListener('click',(e)=>{
    e.preventDefault()
    //increasing the counter by one and setting the cost in summery
    counter.innerText=parseInt(counter.innerText)+1;
    Setprice()

})

decrementor.addEventListener('click',(e)=>{
    e.preventDefault()
    //decreasing the counter by one and setting the cost in summery
    if(parseInt(counter.innerText)>1){
        counter.innerText=parseInt(counter.innerText)-1;
        Setprice()
    }
    // failsafing the counter to 1
    else
    counter.innerText=1;
})

//function to calculate the item cost and total cost
function Setprice(){
    itemCost.innerText=parseInt(counter.innerText)*parseFloat(price.innerText); 
    total.innerText=parseInt(itemCost.innerText)+parseFloat(shippingCost.innerText); 
}
