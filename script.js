let list1=Array.from(document.getElementsByClassName('list1'));
let lists=Array.from(document.getElementsByClassName('lists'));
let mylist=Array.from(document.getElementsByClassName('mylist'));
let counter=Array.from(document.getElementsByClassName('counter'));
let price=Array.from(document.getElementsByClassName('pric'));
let totalfin=document.getElementsById('totalfin');

let plus=Array.from(document.getElementById('add'));
fror (let i=0; i<mylist.length;i++) {
    plus[i].addEventlistener('click',function(){
        counter[i].innerText++
    }
)

let minus=Array.from(document.getElementById('minus'));
minus[i].addEventlistener('click',function(){
    if(counter[i]innerHTML>0){
        counter[i].innerText--;
    }
}
)
let buttonremove=remove[i];
buttonremove.addEventlistener('click',function(){
    let buttonclick=event.target
    buttonclick.parentElemnt.remove(
        price[i].innerHTML_0;
    )
}
)
}

let total=Array.from(document.getElementById('total'));

function calculateSum(){
    total[i].value=number(price[i].innerText)* Number(counter[i].innerText)
    somme+= Number(price[i].innerText)*Number(counter[i].innerText)
    totalfin.value=somme;
}
function changeClolr(col){
    if(col.target.style.color !=='red'){
        col.target.style.color ='red'
    }
    else{
        col.target.style.color='black'
    }
}
let heart=Array.from(document.getElementById('heart'));
heart[i].addEventlistener('click',changeClolr)
function myFunction(){
    confirm('Are you sure to buy it ?')
}

