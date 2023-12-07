const buttons = document.querySelectorAll('.button')
const body = document.querySelector("body")

buttons.forEach((button)=>{
   button.addEventListener('click',function(event){
      
   if(event.target.id === 'grey'){
      body.style.backgroundColor = event.target.id;
   }
   if(event.target.id === 'white'){
      body.style.backgroundColor = event.target.id;
   }
   if(event.target.id === 'blueviolet'){
      body.style.backgroundColor = event.target.id;
   }
   if(event.target.id === 'orange'){
      body.style.backgroundColor = event.target.id;
   }
   });
});

