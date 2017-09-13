// console.log('Loaded!');

// //change the text of the main text div

// var element = document.getElelmentById('main-text');
// element.innerHTML = 'New Value';

// //move the img
// var img=document.getElementById('madi');

// var marginLeft=0;
// function moveRight(){
//     marginLeft = marginLeft+10;
//     img.style.marginLeft = marginLeft +'px';
// }
// img.onClick = function(){
//     var interval = setInterval(moveRight,50);
//     //img.style.marginLeft = '100px';
// };

var button =document.getElementById('counter');
button.onclick=function(){
counter=counter+1;
var span=document.getElementById('count');
span.innerHTML=counter.toString();

};