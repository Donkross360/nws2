import { useState } from 'react';
import contactStyles from '../styles/Contact.module.css';

const Cards = () => {
    const [userInput, setUserInput] = useState('');

    const onUserChangedText = (event) => {
        // console.log(event.target.value);
        setUserInput(event.target.value);
      };

  return (
    <div>
        <div className={contactStyles.card}>
          <textarea placeholder="start typing here" 
          className={contactStyles.center} 
          value={userInput}
          onChange={onUserChangedText}
          /></div>
    </div>
  )
}

export default Cards