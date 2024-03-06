let l1=document.querySelector('.L1')
let l2=document.querySelector('.L2')
let l3=document.querySelector('.L3')
let l4=document.querySelector('.L4')

let d1=document.querySelector('.D1')
let d2=document.querySelector('.D2')
let d3=document.querySelector('.D3')
let d4=document.querySelector('.D4')

let s1=document.querySelector('.S1')
let s2=document.querySelector('.S2')
let s3=document.querySelector('.S3')
let s4=document.querySelector('.S4')

function ld1(){
    if (d1.style.display=='block') {
        d1.style.display='none'
        l1.style.backgroundColor='white'
        s1.style.transform = 'rotate(180deg)'
    
    } else {
        d1.style.display='block'
        l1.style.backgroundColor="rgb(242,242,242)"
        s1.style.transform = 'rotate(360deg)'
        
    }
}
function ld2(){
    if (d2.style.display=='block') {
        d2.style.display='none'
        l2.style.backgroundColor='white'
        s2.style.transform = 'rotate(180deg)'
    } else {
        d2.style.display='block'
        l2.style.backgroundColor='rgb(242,242,242)'
        s2.style.transform = 'rotate(360deg)'
    }
}
function ld3(){
    if (d3.style.display=='block') {
        d3.style.display='none'
        l3.style.backgroundColor='white'
        s3.style.transform = 'rotate(180deg)'
    } else {
        d3.style.display='block'
        l3.style.backgroundColor='rgb(242,242,242)'
        s3.style.transform = 'rotate(360deg)'
    }
}
function ld4(){
    if (d4.style.display=='block') {
        d4.style.display='none'
        l4.style.backgroundColor='white'
        s4.style.transform = 'rotate(180deg)'
     } else {
        d4.style.display='block'
        l4.style.backgroundColor='rgb(242,242,242)'
        s4.style.transform = 'rotate(360deg)'
    }
}