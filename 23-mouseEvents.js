const clearBtn = document.querySelector('.delete-list');
const wrapper = document.querySelector('.wrapper');
const heading = document.querySelector('h2');

// Click
//clearBtn.addEventListener('click', runEvent);
// Doubleclick
//clearBtn.addEventListener('dblclick', runEvent);
// Mousedown
//clearBtn.addEventListener('mousedown', runEvent);
// Mouseup
//clearBtn.addEventListener('mouseup', runEvent);
// Mouseenter
//clearBtn.addEventListener('mouseenter', runEvent);
// Mouseleave
//clearBtn.addEventListener('mouseleave', runEvent);
// Mouseover
//clearBtn.addEventListener('mouseover', runEvent);
// Mouseout
//clearBtn.addEventListener('mouseout', runEvent);
// Mouseover and mouseout fire when you interact with clild elements 
// Mousemove
wrapper.addEventListener('mousemove', runEvent);

// Event Handler
function runEvent(e){
  console.log(`EVENT TYPE: ${e.type}`);
  
  // Show mouse coordinates
  heading.textContent = `MouseX: ${e.offsetX} MouseY: ${e.offsetY}`;
  
  document.body.style.backgroundColor = `rgb(${e.offsetX}, 40, ${e.offsetY})`;
}