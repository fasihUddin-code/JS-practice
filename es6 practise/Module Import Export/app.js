// Default import class

// import Nokia from './mobile.js';
// const n = new Nokia();
// n.volumeUp();

// Default import function

// import show from './mobile.js';
// show();

// Default import variable

// import a from './mobile.js';
// console.log(a);


// Named import class

// import {Nokia} from './mobile.js';
// const n = new Nokia();
// n.volumeUp();

//Named import function

// import {show} from './mobile.js';
// show();

// //Named import variable

// import {stdName} from './mobile.js';
// console.log(stdName);

//Named import
// import * as device from './mobile.js';

// const n = new device.Nokia();
// n.volumeUp();
// device.show();
// console.log(device.stdName);

//Named and Default import

import  Nokia, {show,stdName} from './mobile.js';

const n = new Nokia();
n.volumeUp();
show();
console.log(stdName);


