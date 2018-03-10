// Event bubbling is the bubbling up of events through the DOM 
// When an event happens on a particular element, it will bubble up through 
// its parents. 

// Event delegation is almost the opposite of bubbling, where a listener is
// put on the parent and logic inside the event handler targets the child

// EVENT BUBBLING 
// Clicking the child triggers the parents
// document.querySelector('h2').addEventListener('click', function(){
//   console.log('Click h2');
// });
// 
// document.querySelector('.subtitle-wrapper').addEventListener('click', function(){
//   console.log('Click subtitle wrapper');
// });

// EVENT DELEGATION 

const delItem = document.querySelector('.delete-item');

//delItem.addEventListener('click', deleteItem);

document.body.addEventListener('click', deleteItem);

// function deleteItem(){
//   console.log('Delete Item');
// }
// Only triggers the first element instance

// function deleteItem(e){
//   if(e.target.className === 'delete-item'){
//     console.log('Delete item');
//   }
// } // Targets all children
// Not best practice as classes must be matched exactly across all instances

function deleteItem(e){
  if(e.target.classList.contains('delete-item')){
    console.log('Delete item');
    e.target.parentElement.remove();
  }
}
