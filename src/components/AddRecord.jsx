import React, { useEffect, useState } from 'react';
import documentStorage from '../DocumentStorage';
import web3 from '../web3';
import { Buffer } from 'buffer';

const AddRecord = () => {
  const [account, setAccount] = useState('');
  const [documents, setDocuments] = useState([]);
  const [status, setStatus] = useState('');

  useEffect(() => {
    const loadAccount = async () => {
      const accounts = await web3.eth.getAccounts();
      setAccount(accounts[0]);
    }
    loadAccount();
  }, []);

  const fileCapture = async (e) => {
    e.preventDefault();
    const file = e.target.files[0];
    const reader = new window.FileReader();
    reader.onload = async (event) => {
      const buffer = Buffer.from(event.target.result);
      const hash = web3.utils.sha3(buffer);
      console.log('hash', hash);
      await documentStorage.methods.storeDocument(hash).send({ from: account, gas: 20000000n });
      setStatus('Document uploaded successfully!');
    };
    reader.readAsArrayBuffer(file);
    await getDocuments();
  }

  const getDocuments = async () => {
    try{
      const doc = await documentStorage.methods.getAllDocuments().call();
      console.log('doc', doc);
      setDocuments(doc);
    }
    catch(e){
      console.log(e)
    }
  }

  return (
    <div>
      <h1>Blockchain eVault</h1>
      <p>Your Account: {account}</p>
      <input type="file" onChange={fileCapture} />
      <hr />
      <h2>Documents</h2>
      <p>{status}</p>
      <input
        type="text"
        placeholder="Enter document hash"
        onBlur={(event) => getDocuments(event.target.value)}
      />
      <ul>
      {documents.map((doc, index) => (
        doc.map((d, i) => (
        <li key={i}>
          <p>{d[0]}</p>
          <p>{d[1]}</p>
          <p>owner: {d[2]}</p>
          <p>version: {d.version.toString()}</p>
        </li>))
      ))}
      </ul>
    </div>
  );
};

export default AddRecord;
