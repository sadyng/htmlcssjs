console.log(888);


let d1=document.querySelector('#d1');
let p1=document.querySelector('#p1');
let d2=document.querySelector('#d2');
let b1=document.querySelector('#b1');
let b2=document.querySelector('#b2');



document.body.addEventListener('click',(e)=>{
    console.log('body clicked')
})

d1.addEventListener('click',(e)=>{
    console.log('d1 clicked')
})

p1.addEventListener('click',(e)=>{
    console.log('p1 clicked')
})

b1.addEventListener('click',(e)=>{
    console.log('b1 clicked')
})

d2.addEventListener('click',(e)=>{
    console.log('d2 clicked')
})

b2.addEventListener('click',(e)=>{
    console.log('b2 clicked')
})