console.log(888);


let d1=document.querySelector('#d1');
let p1=document.querySelector('#p1');
let d2=document.querySelector('#d2');
let b1=document.querySelector('#b1');
let b2=document.querySelector('#b2');





d1.addEventListener('click',(e)=>{
    console.log('d1 clicked')
})

p1.addEventListener('click',(e)=>{
    console.log('p1 clicked')
})


d2.addEventListener('click',(e)=>{
    e.stopPropagation();
    console.log('d2 clicked')
})
d2.addEventListener('click',(e)=>{
    console.log('d2 clicked again')
})

b1.addEventListener('click',(e)=>{
    e.stopImmediatePropagation();
    console.log('b1 clicked')
})
b1.addEventListener('click',(e)=>{
    console.log('b1 clicked again')
})

b2.addEventListener('click',(e)=>{
    console.log('b2 clicked')
})



//all pointerevent
b2.addEventListener('pointerdown',(e)=>{
    console.log('pointerdown')
})
b2.addEventListener('pointerup',(e)=>{
    console.log('pointerup')
})
b2.addEventListener('pointerout',(e)=>{
    console.log('pointerout')
})
b2.addEventListener('pointermove',(e)=>{
    console.log('pointermove')
})
b2.addEventListener('pointerover',(e)=>{
    console.log('pointerover')
})
b2.addEventListener('pointerleave',(e)=>{
    console.log('pointerleave')
})
b2.addEventListener('pointercancel',(e)=>{
    console.log('pointercancel')
})
b2.addEventListener('pointerenter',(e)=>{
    console.log('pointerenter')
})
b2.addEventListener('gotpointercapture',(e)=>{
    console.log('gotpointcapture')
})
b2.addEventListener('leavepointercapture',(e)=>{
    console.log('leavepointcapture')
})


