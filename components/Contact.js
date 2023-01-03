import mifare from 'mifare-classic';
import { useState } from 'react';

const Contact = () => {
  const [output, setOutput] = useState('');
  
  const readTag = (err, data, uid) => {
    if (err) {
      setOutput(`An error occurred: ${err.message}`);
    } else {
      setOutput(`The NFC tag UID is ${uid}`);
      const message = ndef.decodeMessage(data.toJSON());
      setOutput(ndef.stringify(message));
    }
  };

  mifare.read(readTag);

  return (
    <div>
      {output}
    </div>
  );
};

export default Contact;