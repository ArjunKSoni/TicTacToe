const s1=document.querySelector('.btn1')
const s2=document.querySelector('.btn2')
const s3=document.querySelector('.btn3')
const s4=document.querySelector('.btn4')
const s5=document.querySelector('.btn5')
const s6=document.querySelector('.btn6')
const s7=document.querySelector('.btn7')
const s8=document.querySelector('.btn8')
const s9=document.querySelector('.btn9')
const msg=document.querySelector('.message')
const reset=document.querySelector('.reset')
let count=0;
let a1={a:'white'}
let a2={a:'white'}
let a3={a:'white'}
let a4={a:'white'}
let a5={a:'white'}
let a6={a:'white'}
let a7={a:'white'}
let a8={a:'white'}
let a9={a:'white'}
s1.addEventListener('click',changeColor1);
s2.addEventListener('click',changeColor2);
s3.addEventListener('click',changeColor3);
s4.addEventListener('click',changeColor4);
s5.addEventListener('click',changeColor5);
s6.addEventListener('click',changeColor6);
s7.addEventListener('click',changeColor7);
s8.addEventListener('click',changeColor8);
s9.addEventListener('click',changeColor9);

// ******************reset*************

reset.addEventListener('click',()=>{
    count=0
    msg.innerHTML="Tic Tac Toe"
    removeColor(s1);
    removeColor(s2);
    removeColor(s3);
    removeColor(s4);
    removeColor(s5);
    removeColor(s6);
    removeColor(s7);
    removeColor(s8);
    removeColor(s9);
    s1.removeAttribute('disabled','true');
    s2.removeAttribute('disabled','true');
    s3.removeAttribute('disabled','true');
    s4.removeAttribute('disabled','true');
    s5.removeAttribute('disabled','true');
    s6.removeAttribute('disabled','true');
    s7.removeAttribute('disabled','true');
    s8.removeAttribute('disabled','true');
    s9.removeAttribute('disabled','true');
    a1.a='white'
    a2.a='white'
    a3.a='white'
    a4.a='white'
    a5.a='white'
    a6.a='white'
    a7.a='white'
    a8.a='white'
    a9.a='white'
})

function changeColor1(){
    change(s1,a1);
}function changeColor2(){
    change(s2,a2);
}function changeColor3(){
    change(s3,a3);
}function changeColor4(){
    change(s4,a4);
}function changeColor5(){
    change(s5,a5);
}function changeColor6(){
    change(s6,a6);
}function changeColor7(){
    change(s7,a7);
}function changeColor8(){
    change(s8,a8);
}function changeColor9(){
    change(s9,a9);
}

// *************winner function*****************

function winner(){
    if( a1.a=="red"&&  a5.a=="red"&& a9.a=="red"|| a3.a=="red"&&  a5.a=="red"&& a7.a=="red"|| a1.a=="red"&& a2.a=="red"&& a3.a=="red"|| a4.a=="red"&&  a5.a=="red"&& a6.a=="red"|| a7.a=="red"&& a8.a=="red"&& a9.a=="red"|| a1.a=="red"&& a4.a=="red"&& a7.a=="red"|| a2.a=="red"&&  a5.a=="red"&& a8.a=="red"|| a3.a=="red"&& a6.a=="red"&& a9.a=="red"){
        msg.innerHTML='RED team wins!!!'
        disable();
        tie()
    }
    if( a1.a=="green"&&  a5.a=="green"&& a9.a=="green"|| a3.a=="green"&&  a5.a=="green"&& a7.a=="green"|| a1.a=="green"&& a2.a=="green"&& a3.a=="green"|| a4.a=="green"&&  a5.a=="green"&& a6.a=="green"|| a7.a=="green"&& a8.a=="green"&& a9.a=="green"|| a1.a=="green"&& a4.a=="green"&& a7.a=="green"|| a2.a=="green"&&  a5.a=="green"&& a8.a=="green"|| a3.a=="green"&& a6.a=="green"&& a9.a=="green"){
        msg.innerHTML='GREEN team wins!!!'
        disable();
        tie()
    }
}

// *************disabled function*************

function disable(){
    s1.setAttribute('disabled','true');
    s2.setAttribute('disabled','true');
    s3.setAttribute('disabled','true');
    s4.setAttribute('disabled','true');
    s5.setAttribute('disabled','true');
    s6.setAttribute('disabled','true');
    s7.setAttribute('disabled','true');
    s8.setAttribute('disabled','true');
    s9.setAttribute('disabled','true');
}

// *****************tie function*************

function tie(){
    if(count==9){
        msg.innerHTML="Game TIE!!!!.";
        disable();
    }
}

// ****************change function****************

function change(x,y){
    if(count%2==0){
        if(x.classList.contains('red')||x.classList.contains('green')){
            msg.innerHTML="Invalid move!!"
        }
        else{
            x.classList.add('red')
            y.a="red";
            msg.innerHTML="Tic Tac Toe"
            count+=1;
            winner()
            tie()
        }
    }
    else{
        if(x.classList.contains('red')||x.classList.contains('green')){
            msg.innerHTML="Invalid move!!"
        }
        else{
            x.classList.add('green')
            y.a="green";
            msg.innerHTML="Tic Tac Toe"
            count+=1;
            winner()
            tie()
        }
    }
}

// *****************colour removal**************

function removeColor(x){
    if(x.classList.contains('red'))x.classList.remove('red')
    if(x.classList.contains('green'))x.classList.remove('green')
}