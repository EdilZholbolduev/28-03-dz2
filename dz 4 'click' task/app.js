var clickButton = document.querySelector('.btn')
var text = document.querySelector('.text')
function clButton(){
   var text2 = prompt('enter smth')
   if(text2 !== null){
      text.textContent = text2
   }
}
clickButton.addEventListener('click',clButton)