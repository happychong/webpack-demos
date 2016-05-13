'use strict';

import React, { Compenent } from 'React';
import ReactDOM from 'react-dom';

class HelloWorld extends Compenent {
    render() {
        return (
            <h1>Hello World</h1>
        )
    }
}

ReactDOM.render(<HelloWorld />, document.getElementById('app'));
