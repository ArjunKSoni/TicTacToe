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
const o={
    a1:'white',
    a2:'white',
    a3:'white',
    a4:'white',
    a5:'white',
    a6:'white',
    a7:'white',
    a8:'white',
    a9:'white'

}
s1.addEventListener('click',changeColor1);
s2.addEventListener('click',changeColor2);
s3.addEventListener('click',changeColor3);
s4.addEventListener('click',changeColor4);
s5.addEventListener('click',changeColor5);
s6.addEventListener('click',changeColor6);
s7.addEventListener('click',changeColor7);
s8.addEventListener('click',changeColor8);
s9.addEventListener('click',changeColor9);
reset.addEventListener('click',()=>{
    msg.innerHTML="Tic Tac Toe"
    if(s1.classList.contains('red'))s1.classList.remove('red')
    if(s1.classList.contains('green'))s1.classList.remove('green')
    if(s2.classList.contains('red'))s2.classList.remove('red')
    if(s2.classList.contains('green'))s2.classList.remove('green')
    if(s3.classList.contains('red'))s3.classList.remove('red')
    if(s3.classList.contains('green'))s3.classList.remove('green')
    if(s4.classList.contains('red'))s4.classList.remove('red')
    if(s4.classList.contains('green'))s4.classList.remove('green')
    if(s5.classList.contains('red'))s5.classList.remove('red')
    if(s5.classList.contains('green'))s5.classList.remove('green')
    if(s6.classList.contains('red'))s6.classList.remove('red')
    if(s6.classList.contains('green'))s6.classList.remove('green')
    if(s7.classList.contains('red'))s7.classList.remove('red')
    if(s7.classList.contains('green'))s7.classList.remove('green')
    if(s8.classList.contains('red'))s8.classList.remove('red')
    if(s8.classList.contains('green'))s8.classList.remove('green')
    if(s9.classList.contains('red'))s9.classList.remove('red')
    if(s9.classList.contains('green'))s9.classList.remove('green')
    s1.removeAttribute('disabled','true');
    s2.removeAttribute('disabled','true');
    s3.removeAttribute('disabled','true');
    s4.removeAttribute('disabled','true');
    s5.removeAttribute('disabled','true');
    s6.removeAttribute('disabled','true');
    s7.removeAttribute('disabled','true');
    s8.removeAttribute('disabled','true');
    s9.removeAttribute('disabled','true');
    o.a1='white'
    o.a2='white'
    o.a3='white'
    o.a4='white'
    o.a5='white'
    o.a6='white'
    o.a7='white'
    o.a8='white'
    o.a9='white'
    
})

function changeColor1(){
if(count%2==0){
    if(s1.classList.contains('red')||s1.classList.contains('green')){
        msg.innerHTML="Invalid move!!"
    }
    else{
        s1.classList.add('red')
        o.a1="red";
        msg.innerHTML="Tic Tac Toe"
        count+=1;
        winner()
    }
}
else{
    if(s1.classList.contains('red')||s1.classList.contains('green')){
        msg.innerHTML="Invalid move!!"
    }
    else{
        s1.classList.add('green')
        o.a1="green";
        msg.innerHTML="Tic Tac Toe"
        count+=1;
        winner()
    }
}
}
function changeColor2(){
    if(count%2==0){
        if(s2.classList.contains('red')||s2.classList.contains('green')){
            msg.innerHTML="Invalid move!!"
        }
        else{
            o.a2="red";
            s2.classList.add('red')
            msg.innerHTML="Tic Tac Toe"
            count+=1;
            winner()
        }
    }
    else{
        if(s2.classList.contains('red')||s2.classList.contains('green')){
            msg.innerHTML="Invalid move!!"
        }
        else{
            o.a2="green";
            s2.classList.add('green')
            msg.innerHTML="Tic Tac Toe"
            count+=1;
            winner()
        }
    }
    }function changeColor3(){
        if(count%2==0){
            if(s3.classList.contains('red')||s3.classList.contains('green')){
                msg.innerHTML="Invalid move!!"
            }
            else{
                o.a3="red";
                s3.classList.add('red')
                msg.innerHTML="Tic Tac Toe"
                count+=1;
                winner()
            }
        }
        else{
            if(s3.classList.contains('red')||s3.classList.contains('green')){
                msg.innerHTML="Invalid move!!"
            }
            else{
                o.a3="green";
                s3.classList.add('green')
                msg.innerHTML="Tic Tac Toe"
                count+=1;
                winner()
            }
        }
        }function changeColor4(){
            if(count%2==0){
                if(s4.classList.contains('red')||s4.classList.contains('green')){
                    msg.innerHTML="Invalid move!!"
                }
                else{
                    o.a4="red";
                    s4.classList.add('red')
                    msg.innerHTML="Tic Tac Toe"
                    count+=1;
                    winner()
                }
            }
            else{
                if(s4.classList.contains('red')||s4.classList.contains('green')){
                    msg.innerHTML="Invalid move!!"
                }
                else{
                    s4.classList.add('green')
                    o.a4="green";
                    msg.innerHTML="Tic Tac Toe"
                    count+=1;
                    winner()
                }
            }
            }
            function changeColor5(){
                if(count%2==0){
                    if(s5.classList.contains('red')||s5.classList.contains('green')){
                        msg.innerHTML="Invalid move!!"
                    }
                    else{
                        o.a5="red";
                        s5.classList.add('red')
                        msg.innerHTML="Tic Tac Toe"
                        count+=1;
                        winner()
                    }
                }
                else{
                    if(s5.classList.contains('red')||s5.classList.contains('green')){
                        msg.innerHTML="Invalid move!!"
                    }
                    else{
                        o.a5="green";
                        s5.classList.add('green')
                        msg.innerHTML="Tic Tac Toe"
                        count+=1;
                        winner()
                    }
                }
                }
                function changeColor6(){
                    if(count%2==0){
                        if(s6.classList.contains('red')||s6.classList.contains('green')){
                            msg.innerHTML="Invalid move!!"
                        }
                        else{
                            o.a6="red";
                            s6.classList.add('red')
                            msg.innerHTML="Tic Tac Toe"
                            count+=1;
                            winner()
                        }
                    }
                    else{
                        if(s6.classList.contains('red')||s6.classList.contains('green')){
                            msg.innerHTML="Invalid move!!"
                        }
                        else{
                            o.a6="green";
                            s6.classList.add('green')
                            msg.innerHTML="Tic Tac Toe"
                            count+=1;
                            winner()
                        }
                    }
                    }function changeColor7(){
                        if(count%2==0){
                            if(s7.classList.contains('red')||s7.classList.contains('green')){
                                msg.innerHTML="Invalid move!!"
                            }
                            else{
                                o.a7="red";
                                s7.classList.add('red')
                                msg.innerHTML="Tic Tac Toe"
                                count+=1;
                                winner()
                            }
                        }
                        else{
                            if(s7.classList.contains('red')||s7.classList.contains('green')){
                                msg.innerHTML="Invalid move!!"
                            }
                            else{
                                o.a7="green";
                                s7.classList.add('green')
                                msg.innerHTML="Tic Tac Toe"
                                count+=1;
                                winner()
                            }
                        }
                        }
                        function changeColor8(){
                            if(count%2==0){
                                if(s8.classList.contains('red')||s8.classList.contains('green')){
                                    msg.innerHTML="Invalid move!!"
                                }
                                else{
                                    o.a8="red";
                                    s8.classList.add('red')
                                    msg.innerHTML="Tic Tac Toe"
                                    count+=1;
                                    winner()
                                }
                            }
                            else{
                                if(s8.classList.contains('red')||s8.classList.contains('green')){
                                    msg.innerHTML="Invalid move!!"
                                }
                                else{
                                    o.a8="green";
                                    s8.classList.add('green')
                                    msg.innerHTML="Tic Tac Toe"
                                    count+=1;
                                    winner()
                                }
                            }
                            }
                            function changeColor9(){
                                if(count%2==0){
                                    if(s9.classList.contains('red')||s9.classList.contains('green')){
                                        msg.innerHTML="Invalid move!!"
                                    }
                                    else{
                                        o.a9="red";
                                        s9.classList.add('red')
                                        msg.innerHTML="Tic Tac Toe"
                                        count+=1;
                                        winner()
                                    }
                                }
                                else{
                                    if(s9.classList.contains('red')||s9.classList.contains('green')){
                                        msg.innerHTML="Invalid move!!"
                                    }
                                    else{
                                        o.a9="green";
                                        s9.classList.add('green')
                                        msg.innerHTML="Tic Tac Toe"
                                        count+=1;
                                        winner();
                                    }
                                }
                                }
function winner(){
if(o.a1=="red"&&o.a5=="red"&&o.a9=="red"||o.a3=="red"&&o.a5=="red"&&o.a7=="red"||o.a1=="red"&&o.a2=="red"&&o.a3=="red"||o.a4=="red"&&o.a5=="red"&&o.a6=="red"||o.a7=="red"&&o.a8=="red"&&o.a9=="red"||o.a1=="red"&&o.a4=="red"&&o.a7=="red"||o.a2=="red"&&o.a5=="red"&&o.a8=="red"||o.a3=="red"&&o.a6=="red"&&o.a9=="red"){
    msg.innerHTML='RED team wins!!!'
    disable();
    tie()
}
if(o.a1=="green"&&o.a5=="green"&&o.a9=="green"||o.a3=="green"&&o.a5=="green"&&o.a7=="green"||o.a1=="green"&&o.a2=="green"&&o.a3=="green"||o.a4=="green"&&o.a5=="green"&&o.a6=="green"||o.a7=="green"&&o.a8=="green"&&o.a9=="green"||o.a1=="green"&&o.a4=="green"&&o.a7=="green"||o.a2=="green"&&o.a5=="green"&&o.a8=="green"||o.a3=="green"&&o.a6=="green"&&o.a9=="green"){
    msg.innerHTML='GREEN team wins!!!'
    disable();
    tie()
}
}
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
function tie(){
    if(o.a1!='white'&&o.a2!='white'&&o.a3!='white'&&o.a4!='white'&&o.a5!='white'&&o.a6!='white'&&o.a7!='white'&&o.a8!='white'&&o.a9!='white'){
        msg.innerHTML="Game TIE!!!!."
    }
    else if(count==8){
        msg.innerHTML="Game TIE!!!!.";
        disable();
    }
}