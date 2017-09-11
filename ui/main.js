console.log('Loaded!');

//change the text of the main text div

var element = document.getElelmentById('main-text');
element.innerHTML = 'New Value';

//move the img
var img=document.getElementById('img');
img.onClick = function(){
    img.style.marginLeft = '100px';
};