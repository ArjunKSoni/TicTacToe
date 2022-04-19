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
})

function changeColor1(){
if(count%2==0){
    if(s1.classList.contains('red')||s1.classList.contains('green')){
        msg.innerHTML="Invalid move!!!!!. Try again..."
    }
    else{
        s1.classList.add('red')
        o.a1="red";
        console.log(o.a1)
        msg.innerHTML="Tic Tac Toe"
        count+=1;
    }
}
else{
    if(s1.classList.contains('red')||s1.classList.contains('green')){
        msg.innerHTML="Invalid move!!!!!. Try again..."
    }
    else{
        s1.classList.add('green')
        o.a1="green";
        msg.innerHTML="Tic Tac Toe"
        count+=1;
    }
}
}
function changeColor2(){
    if(count%2==0){
        if(s2.classList.contains('red')||s2.classList.contains('green')){
            msg.innerHTML="Invalid move!!!!!. Try again..."
        }
        else{
            o.a2="red";
            s2.classList.add('red')
            msg.innerHTML="Tic Tac Toe"
            count+=1;
        }
    }
    else{
        if(s2.classList.contains('red')||s2.classList.contains('green')){
            msg.innerHTML="Invalid move!!!!!. Try again..."
        }
        else{
            o.a2="green";
            s2.classList.add('green')
            msg.innerHTML="Tic Tac Toe"
            count+=1;
        }
    }
    }function changeColor3(){
        if(count%2==0){
            if(s3.classList.contains('red')||s3.classList.contains('green')){
                msg.innerHTML="Invalid move!!!!!. Try again..."
            }
            else{
                o.a3="red";
                s3.classList.add('red')
                msg.innerHTML="Tic Tac Toe"
                count+=1;
            }
        }
        else{
            if(s3.classList.contains('red')||s3.classList.contains('green')){
                msg.innerHTML="Invalid move!!!!!. Try again..."
            }
            else{
                o.a3="green";
                s3.classList.add('green')
                msg.innerHTML="Tic Tac Toe"
                count+=1;
            }
        }
        }function changeColor4(){
            if(count%2==0){
                if(s4.classList.contains('red')||s4.classList.contains('green')){
                    msg.innerHTML="Invalid move!!!!!. Try again..."
                }
                else{
                    o.a4="red";
                    s4.classList.add('red')
                    msg.innerHTML="Tic Tac Toe"
                    count+=1;
                }
            }
            else{
                if(s4.classList.contains('red')||s4.classList.contains('green')){
                    msg.innerHTML="Invalid move!!!!!. Try again..."
                }
                else{
                    s4.classList.add('green')
                    o.a4="green";
                    msg.innerHTML="Tic Tac Toe"
                    count+=1;
                }
            }
            }
            function changeColor5(){
                if(count%2==0){
                    if(s5.classList.contains('red')||s5.classList.contains('green')){
                        msg.innerHTML="Invalid move!!!!!. Try again..."
                    }
                    else{
                        o.a5="red";
                        s5.classList.add('red')
                        msg.innerHTML="Tic Tac Toe"
                        count+=1;
                    }
                }
                else{
                    if(s5.classList.contains('red')||s5.classList.contains('green')){
                        msg.innerHTML="Invalid move!!!!!. Try again..."
                    }
                    else{
                        o.a5="green";
                        s5.classList.add('green')
                        msg.innerHTML="Tic Tac Toe"
                        count+=1;
                    }
                }
                }
                function changeColor6(){
                    if(count%2==0){
                        if(s6.classList.contains('red')||s6.classList.contains('green')){
                            msg.innerHTML="Invalid move!!!!!. Try again..."
                        }
                        else{
                            o.a6="red";
                            s6.classList.add('red')
                            msg.innerHTML="Tic Tac Toe"
                            count+=1;
                        }
                    }
                    else{
                        if(s6.classList.contains('red')||s6.classList.contains('green')){
                            msg.innerHTML="Invalid move!!!!!. Try again..."
                        }
                        else{
                            o.a6="green";
                            s6.classList.add('green')
                            msg.innerHTML="Tic Tac Toe"
                            count+=1;
                        }
                    }
                    }function changeColor7(){
                        if(count%2==0){
                            if(s7.classList.contains('red')||s7.classList.contains('green')){
                                msg.innerHTML="Invalid move!!!!!. Try again..."
                            }
                            else{
                                o.a7="red";
                                s7.classList.add('red')
                                msg.innerHTML="Tic Tac Toe"
                                count+=1;
                            }
                        }
                        else{
                            if(s7.classList.contains('red')||s7.classList.contains('green')){
                                msg.innerHTML="Invalid move!!!!!. Try again..."
                            }
                            else{
                                o.a7="green";
                                s7.classList.add('green')
                                msg.innerHTML="Tic Tac Toe"
                                count+=1;
                            }
                        }
                        }
                        function changeColor8(){
                            if(count%2==0){
                                if(s8.classList.contains('red')||s8.classList.contains('green')){
                                    msg.innerHTML="Invalid move!!!!!. Try again..."
                                }
                                else{
                                    o.a8="red";
                                    s8.classList.add('red')
                                    msg.innerHTML="Tic Tac Toe"
                                    count+=1;
                                }
                            }
                            else{
                                if(s8.classList.contains('red')||s8.classList.contains('green')){
                                    msg.innerHTML="Invalid move!!!!!. Try again..."
                                }
                                else{
                                    o.a8="green";
                                    s8.classList.add('green')
                                    msg.innerHTML="Tic Tac Toe"
                                    count+=1;
                                }
                            }
                            }
                            function changeColor9(){
                                if(count%2==0){
                                    if(s9.classList.contains('red')||s9.classList.contains('green')){
                                        msg.innerHTML="Invalid move!!!!!. Try again..."
                                    }
                                    else{
                                        o.a9="red";
                                        s9.classList.add('red')
                                        msg.innerHTML="Tic Tac Toe"
                                        count+=1;
                                    }
                                }
                                else{
                                    if(s9.classList.contains('red')||s9.classList.contains('green')){
                                        msg.innerHTML="Invalid move!!!!!. Try again..."
                                    }
                                    else{
                                        o.a9="green";
                                        s9.classList.add('green')
                                        msg.innerHTML="Tic Tac Toe"
                                        count+=1;
                                    }
                                }
                                }
if((s1.classList.contains('red')&&s5.classList.contains("red")&&s9.classList.contains('red'))||(s3.classList.contains('red')&&s5.classList.contains("red")&&s7.classList.contains('red'))||(s1.classList.contains('red')&&s2.classList.contains("red")&&s3.classList.contains('red'))||(s4.classList.contains('red')&&s5.classList.contains("red")&&s6.classList.contains('red'))||(s7.classList.contains('red')&&s8.classList.contains("red")&&s9.classList.contains('red'))||(s1.classList.contains('red')&&s4.classList.contains("red")&&s7.classList.contains('red'))||(s2.classList.contains('red')&&s5.classList.contains("red")&&s8.classList.contains('red'))||(s3.classList.contains('red')&&s6.classList.contains("red")&&s9.classList.contains('red'))){
    msg.innerHTML('RED team wins!!! woow....')
    console.log('red')
    s1.classList.add('disable');
    s2.classList.add('disable');
    s3.classList.add('disable');
    s4.classList.add('disable');
    s5.classList.add('disable');
    s6.classList.add('disable');
    s7.classList.add('disable');
    s8.classList.add('disable');
    s9.classList.add('disable');
}
if((s1.classList.contains('green')&&s5.classList.contains("green")&&s9.classList.contains('green'))||(s3.classList.contains('green')&&s5.classList.contains("green")&&s7.classList.contains('green'))||(s1.classList.contains('green')&&s2.classList.contains("green")&&s3.classList.contains('green'))||(s4.classList.contains('green')&&s5.classList.contains("green")&&s6.classList.contains('green'))||(s7.classList.contains('green')&&s8.classList.contains("green")&&s9.classList.contains('green'))||(s1.classList.contains('green')&&s4.classList.contains("green")&&s7.classList.contains('green'))||(s2.classList.contains('green')&&s5.classList.contains("green")&&s8.classList.contains('green'))||(s3.classList.contains('green')&&s6.classList.contains("green")&&s9.classList.contains('green'))){
    msg.innerHTML('GREEN team wins!!! woow....')
    s1.classList.add('disable');
    s2.classList.add('disable');
    s3.classList.add('disable');
    s4.classList.add('disable');
    s5.classList.add('disable');
    s6.classList.add('disable');
    s7.classList.add('disable');
    s8.classList.add('disable');
    s9.classList.add('disable');
}