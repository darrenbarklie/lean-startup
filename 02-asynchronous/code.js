// Three types of asynchronous JavaScript:
// - Callbacks
// - Promises
// - Async/Await

// 1. AJAX & XHR
/*
  Asynchronous JavaScript and XML
  - Now usually uses JSON over XML
  - Make async requests in the background
  - No page reload or refresh
  - Fetch data
  - Very interactive
  - Can be from local machine or public API
  - Public API must have CORS (cross-domain communicating) enabled

  CLIENT > JS Call > AJAX ENGINE > XmlHttpRequest > SERVER
  CLIENT < HTML Response < AJAX ENGINE < XML/JSON < SERVER
*/

// XmlHttpRequest (XHR) Object
/*
  - API in the form of an object
  - Provided by browser's JS env
  - Methods data transfer between client & server
  - Works with various protocalls and data
*/

// Other methods for async JS
// Fetch API, Axios, Superagent, jQuery, Node HTTP

document.getElementById('id').addEventListener('click', loadData);

function loadData(e) {
  // Create XHR object
  const xhr = new XmlHttpRequest();

  // Open (READYSTATE 1)
  xhr.open('GET', 'data.txt', true);
  // Onprogress (READYSTATE 3)
  xhr.onprogress(function() {
    // Loader function
  });
  // Onload (READYSTATE 4)
  xhr.onload(function() {
    if(this.status === 200) {
      console.log(this.responseText);

      const item = JSON.parse(this.responseText)
    }
  });
  // Onerror
  xhr.onerror(function() {
    console.log('Request error...')
  });
  // Send
  xhr.send();
}
