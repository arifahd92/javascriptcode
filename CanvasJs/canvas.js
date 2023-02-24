let item1=document.getElementById("item1")
let item2=document.getElementById("item2")
let item3=document.getElementById("item3")
let item4=document.getElementById("item4")

let flexitem1=document.getElementById("flexitem1")
let flexitem2=document.getElementById("flexitem2")
let flexitem3=document.getElementById("flexitem3")
let flexitem4=document.getElementById("flexitem4")

let aerrow1=document.getElementById("aerrow1")
let aerrow2=document.getElementById("aerrow2")
let aerrow3=document.getElementById("aerrow3")
let aerrow4=document.getElementById("aerrow4")

let btn = document.getElementById("btn")

let body = document.getElementById("body")
let darkoff=document.getElementById("darkoff")
let darkon=document.getElementById("darkon")
darkoff.checked=true
darkon.addEventListener("click",()=>{
    if(darkon.checked)
    body.style.backgroundColor="RGB(67,65,65)"
    console.log("object")
})

darkoff.addEventListener("click",()=>{
    if(darkoff.checked){
        body.style.backgroundColor="white"   
    }
})

item1.addEventListener("click",()=>{
   aerrow1.style.transition = "all 5s";
   aerrow1.style.marginLeft="-4px"
   setTimeout(()=>{
    item1.style.backgroundColor="grey"
   },4800)
})

item2.addEventListener("click",()=>{
    aerrow2.style.transition = "all 5s";
    aerrow2.style.marginLeft="-4px"
    setTimeout(()=>{
    item2.style.backgroundColor="grey"
   },4800)
})
item3.addEventListener("click",()=>{
    aerrow3.style.transition = "all 5s";
    aerrow3.style.marginLeft="-4px"
    console.log("item3")
    setTimeout(()=>{
    item3.style.backgroundColor="grey"
   },4800)
})

item4.addEventListener("click",()=>{
    aerrow4.style.transition = "all 5s";
    aerrow4.style.marginLeft="-4px"
   setTimeout(()=>{
    item4.style.backgroundColor="grey"
   },4800)
})

btn.addEventListener("click",()=>{
if(window.innerWidth>1000){
    console.log(window.innerWidth)

    item1.style.backgroundColor="yellow"
    aerrow1.style.marginLeft="44vw"
    item2.style.backgroundColor="blue"
    aerrow2.style.marginLeft="44vw"
    item3.style.backgroundColor="red"
    aerrow3.style.marginLeft="44vw"
    item4.style.backgroundColor="green"
    aerrow4.style.marginLeft="44vw"
    console.log("btn got clicked")
}
else if(window.innerWidth>472) {
    item1.style.backgroundColor="yellow"
    aerrow1.style.marginLeft="35vw"
    item2.style.backgroundColor="blue"
    aerrow2.style.marginLeft="35vw"
    item3.style.backgroundColor="red"
    aerrow3.style.marginLeft="35vw"
    item4.style.backgroundColor="green"
    aerrow4.style.marginLeft="35vw"
}
else{
    item1.style.backgroundColor="yellow"
    aerrow1.style.marginLeft="70vw"
    item2.style.backgroundColor="blue"
    aerrow2.style.marginLeft="70vw"
    item3.style.backgroundColor="red"
    aerrow3.style.marginLeft="70vw"
    item4.style.backgroundColor="green"
    aerrow4.style.marginLeft="70vw" 
}
})