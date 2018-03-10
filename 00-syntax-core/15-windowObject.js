// WINDOW OBJECT 
// Is the global oject in the client-side JavaScript
// Document object is part of the window object

// In NodeJS, running as a standalone service, the system is the environment
// In clientsideJS, the browser window is the global environment
// Both nodeJS and Chrome use the same V8 JS engine built on C++

// Window object contains a lot, like local storage, fetch api, navigatior
// object, geolocation, alert, prompt, confirm

// Type 'window' into Chrome

/*
  document 
  fetch
  innerHeight
  innerWidth
  localStorage
  navigatior
  events, etc...
*/


// WINDOM METHODS / OBJECTS / PROPERTIES

//window.console.log(123);

// Alert 
//alert('Hello');

// Prompt
//const input = prompt();
//alert(input);

// Confirm
// if(confirm('Are you sure?')){
//   console.log('Run action');
// } else {
//   console.log('Optional alternative action');
// }

// WIDTH and HEIGHT (outer and inner)
let val;

val = window.outerHeight;
val = window.outerWidth;
val = window.innerHeight;
val = window.innerWidth;

// SCROLL points
val = window.scrollY;
val = window.scrollX;

// LOCATION object 
val = window.location;
// Includes properties like host, href, origin, pathname, port, etc.
val = window.location.hostname; // localhost
val = window.location.port; // 3000
val = window.location.href; // http://localhost:3000
val = window.location.search; // ...?id=1 (search query)

// REDIRECT
//window.location.href = 'http://www.google.com';

// RELOAD
//window.location.reload();

// HISTORY object
//window.history.go(-2);
val = window.history.length;

// NAVIGATOR object
val = window.navigator;
// appCodeName, appName, deviceMemory, geolocation, languages, platform,
// permissions, storage, useragent, etc
val = window.navigator.appName;
val = window.navigator.appVersion;
val = window.navigator.userAgent;
val = window.navigator.platform;
val = window.navigator.vendor;
val = window.navigator.language

console.log(val);
