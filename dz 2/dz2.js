// Traffic light 
var color = prompt('choose a color please (red,yellow,green)')
switch(color){
   case 'red':
   console.log('Stop!')
   break
   case 'yellow':
   console.log('get ready')
   break
   case 'green':
   console.log('Go!')
   break
   default:
   console.log('Error')
}
// 2nd task
var towns = ['Bishkek','Los Angeles','Chicago','New York','Huston','Dollas','Philadelphia','Seattle']
for(var i=0; i<towns.length; i++){
   if(towns[i][0]==='s' || towns[i][0] === 'S' || towns[i][1]==='s' || towns[i][1] === 'S' || towns[i][2]==='s' || towns[i][2] === 'S' || towns[i][3]==='s' || towns[i][3] === 'S' || towns[i][4]==='s' || towns[i][4] === 'S' || towns[i][5]==='s' || towns[i][5] === 'S' || towns[i][6]==='s' || towns[i][6] === 'S' || towns[i][7]==='s' || towns[i][7] === 'S' || towns[i][8]==='s' || towns[i][8] === 'S' || towns[i][9]==='s' || towns[i][9] === 'S' || towns[i][10]==='s' || towns[i][10] === 'S' || towns[i][11]==='s' || towns[i][11] === 'S'){
      console.log(`this town has a letter s or 'S' ${towns[i]}`)
   }else{
      console.log(`this town has not a letter s or 'S' ${towns[i]}`)
   }
}
// 3rd task
var towns2 = ['Bishkek','Los Angeles','Chicago','New York','Huston','Dollas','Philadelphia','Seattle']
for(i of towns2){
   if(i.length > [6]){
      console.log(`more than 6 symbols - ${i}`)
   }else{
      console.log(`less than or equal to 6 symbols - ${i}`)
   }
}