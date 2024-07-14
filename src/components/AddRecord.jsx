import React, { useEffect, useState } from 'react';
import myContract from '../MyContract';
import web3 from '../web3';
import { Buffer } from 'buffer';

const AddRecord = () => {
  const [account, setAccount] = useState('');
  const [buffer, setBuffer] = useState(null);
  const [documents, setDocuments] = useState([]);

  useEffect(() => {
    const loadAccount = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
      loadDocuments();
    }
    loadAccount();
  }, []);

  const fileCapture = (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.readAsArrayBuffer(file);
    reader.onloadend = () => setBuffer(Buffer(reader.result));
  }

  const onSubmit = async (e) => {
    e.preventDefault();
    console.log('Submitting file to IPFS...', account);
    localStorage.setItem('myData', buffer);
    await myContract.methods.uploadDocuments(localStorage.getItem('myData')).send({ from: account,gas: 2000000n, // Increased gas limit
        gasPrice: await web3.eth.getGasPrice() });
    console.log('coming...', localStorage.getItem('myData'));
    loadDocuments();
  };

  const loadDocuments = async () => {
    const docCount = await myContract.methods.getDocumentCount().call();
    const docs = [];

    for(let i=0; i<docCount; i++) {
      const doc = await myContract.methods.documents(i).call();
      docs.push(doc);
    }
    setDocuments(docs);
  }

  return (
    <div>
      <h1>Blockchain eVault</h1>
      <p>Your Account: {account}</p>
      <form onSubmit={onSubmit}>
        <input type="file" onChange={fileCapture} />
        <button type="submit">Upload</button>
      </form>
      <hr />
      <h2>Documents</h2>
      <ul>
        {documents.map((doc, index) => (
          <li key={index}>
            {doc}
          </li>
        ))}
        </ul>
    </div>
  );
};

export default AddRecord;
