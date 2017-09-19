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
//var counter=0;
button.onclick=function(){
    //make a request to the counter end point
    //craete a request object
    var request=new XMLHttpRequest();
    
    //capture the response and store it in a variable
    request.onreadystatechange=function(){
        if(request.readyState===XMLHttpRequest.DONE){
            if(request.status===200){
                var counter =request.responseText;
                var span=document.getElementById('count');
                span.innerHTML=counter.toString();
            }
        }
    };
    
  //render the variable in the correct span  
// counter=counter+1;
// var span=document.getElementById('count');
// span.innerHTML=counter.toString();


//Make the Request
request.open('GET','http://baddamshash3434.imad.hasura-app.io/counter',true);
request.send(null);
};


//submit name
var nameInput=document.getElementById('name');
var name=nameInput.value;
var submit=document.getElelmentById('submit_btn');
submit.onclick=function(){
    //make a request to the server and send d name
    
    //capture a list of names and render it as a list
    
    var names=['name1','name2','name3','name4'];
    var list='';
    for(var i=0;i<names.length;i++){
        list+='<li>'+names[i]+'</li>';
    }
    var ul=document.getElementById('namelist');
    ul.innerHTML=list;
    
};