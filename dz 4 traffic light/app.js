function trafLight(){ 
   var trafficLight = document.querySelectorAll('.light')
   console.log(trafficLight)
   var color = prompt('enter a trafficlight color')
   if(color === 'red' || color === 'Red'){
      trafficLight[0].style.backgroundColor = 'red'
      console.log('STOP!')
   }else if(color === 'yellow' || color === 'Yellow'){
      trafficLight[1].style.backgroundColor = 'yellow'
      console.log('Be ready to go!')
   }else if(color === 'green' || color === 'Green'){
      trafficLight[2].style.backgroundColor = 'green'
      console.log('Goo!!')
   }else{
      alert('404 not found (enter only trafficLight colors)')
   }
}
trafLight()
