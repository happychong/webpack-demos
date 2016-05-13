// var component = require('./component.js');
//
// component();

'use strict';
import React, { Component } from 'react';
import ReactDom from 'react-dom';

// resolve extensions start
// import component from './component.js';
// component();
// resolve extensions end

// react-babel start
// class HelloWorld extends Component {
//     render () {
//         return (
//             <h1>Hello world</h1>
//         )
//     }
// }
// ReactDom.render(<HelloWorld />, document.getElementById('app'));
//react-babel end


// 样式 start
import Button from './components/Button/Button';
let root = document.getElementById('app');
ReactDom.render(<Button />, root);
// 样式 end
