import React, { useState } from 'react';
import myContract from '../MyContract';
import web3 from '../web3';

const AddRecord = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const onSubmit = async (event) => {
    event.preventDefault();

    const accounts = await web3.eth.getAccounts();
    await myContract.methods.addRecord(title, content).send({ from: accounts[0],gas: 2000000n, // Increased gas limit
        gasPrice: await web3.eth.getGasPrice() });
console.log('added successfully');
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={onSubmit}>
      <div>
        <label>Title:</label>
        <input value={title} onChange={e => setTitle(e.target.value)} />
      </div>
      <div>
        <label>Content:</label>
        <textarea value={content} onChange={e => setContent(e.target.value)}></textarea>
      </div>
      <button type="submit">Add Record</button>
    </form>
  );
};

export default AddRecord;