// task one
var getDataType = function(){
   var dataType = prompt('enter datatype')
   if(dataType === 'false' || dataType === 'true'){
      console.log('it is boolean')
   }else if(dataType === "" || dataType === null){
      console.log(`it is null`)
   }else if(dataType < 1 || dataType > 1){
      console.log(`it is number`)
   }else if(typeof dataType === 'string'){
      console.log(`it's string`)
   }else{
      console.log('Wait for new updates about this datatype.')
   }
}
getDataType()
// task two 
function rowReverse() {
   var text = prompt('Enter your string')
   var textReverse = reverseString(text)
   console.log(textReverse)
}
function reverseString(string) {
   return string.split('').reverse().join('')
}
rowReverse()