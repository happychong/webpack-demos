import React, { Component } from 'react';

import style = require('./Button.less');

class Button extends Component {
    handleClick() {
        alert('戳我干嘛??');
    }
    render() {
        // const style = require('./Button.less');

        return (
            <button className={styles.my-button} onClick={this.handleClick.bind(this)}>
                快戳我a
            </button>
        )
    }
}

export default Button;
