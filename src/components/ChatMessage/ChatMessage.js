import React, { Component } from 'react';
import styles from './ChatMessage.css';

class ChatMessage extends Component {
  render() {
    return (
      <div className={styles.root}>
        <img src="http://very.cute.png" />
        <p className={styles.text}> woooooow图片路径不对吧？ </p>
      </div>
    );
  }
}

export default ChatMessage;
