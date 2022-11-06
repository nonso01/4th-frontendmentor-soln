"use strict"

const csl=(x)=>console.log(x)
const dc=(x)=>document.createElement(x)
const dq=(x)=>document.querySelector(x)
const dqA=(x)=> document.querySelectorAll(x)


const body= dq('body')
const html= dq("html")

const MOBILE_WIDTH = 670
const TABLET_WIDTH= 1040

function event(e,t,f){
 const event= e.addEventListener(t,f)
}

resize()


const person = [
 {
  img: "/images/image-colton.jpg",
  work: "Verified Buyer",
  name: "Colton Smith",
  word:  "We needed the same printed design as the one we had ordered a week prior. Not only did they find the original order, but we also received it in time.Excellent!"
 },
 {
  img: "/images/image-irene.jpg",
  work: "Verified Buyer",
  name: 'Irene Roberts',
  word:      "Customer service is always excellent and very quick turn around. Completely delighted with the simplicity of the purchase and the speed of delivery."
 },
 {
  img: "/images/image-anne.jpg",
  work: "Verified Buyer",
  name: 'Anne Wallace',
  word:  "Put an order with this company and can only praise them for the very high standard.Will definitely use them again and recommend them to everyone!"
 },
 
 
 ]


  function render(data=person){
   
   const div= dq(".sc__people")
   const t= typeof data
   if(t!=="object") throw new TypeError(`expected an Object but saw a ${t}`)
   
   let show= data.map(e=>{
    return (`<div class="sc__card fx-evenly fx-column"><div class="sc__ico fx-row fx-evenly"><img src=${e.img}><div class="fx-column fx-evenly"><h2>${e.name}</h2><h3>${e.work}</h3></div></div> <p>${e.word}</p></div>`)
   }).join("")
  
    div.innerHTML= show
    
    
   event(window,"resize",resize)
  }



 function resize(){
  let W= window.innerWidth
  csl(W)
 }



event(window,"load",render())
