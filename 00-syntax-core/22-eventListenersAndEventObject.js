// addEventListener
// takes in an event and an anonymous callback function
/*
document.querySelector('.delete-list').addEventListener('click', function(e){
  e.preventDefault();
  console.log('Click');
}); */

// Using named function is a semantically neater
document.querySelector('.delete-list').addEventListener('click', onClick);

function onClick(e){
  //console.log('Clicked');
  
  let val;
  
  val = e;
  // clientX, clientY, timeStamp, target
  
  // Event target element 
  val = e.target; // Returns html element 
  val = e.target.className; // delete-list
  
  e.target.innerText = 'Button Clicked';
  
  // Event type
  val = e.type;
  // Event timestamp 
  val = e.timeStamp;
  // Coordinate relevant to window
  val = e.clientY;
  val = e.clientX;
  // Coordinate relevant to element
  val = e.offsetY;
  val = e.offsetX;
  
  console.log(val);
}
