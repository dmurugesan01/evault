import React, { useEffect, useState } from 'react';
import myContract from '../MyContract';


const RecordList = () => {
  const [records, setRecords] = useState([]);

  useEffect(() => {
    const fetchRecords = async () => {
      const recordCount = await myContract.methods.getRecordCount().call();
      const records = [];

      for (let i = 1; i <= recordCount; i++) {
        const record = await myContract.methods.getRecord(i).call();
        records.push(record);
      }
      console.log(records)

      setRecords(records);
    };

    fetchRecords();
  }, []);

  return (
    <div style={{overflowY:'auto'}}>
      {records.map(record => (
        <div key={record[0]}>
          <h3>{record[1]}</h3>
          <p>{record[2]}</p>
          <small>Owner: {record[3]}</small>
          <br />
          {/* <small>Timestamp: {new Date(record[4] * 1000).toLocaleString()}</small> */}
          <hr />
        </div>
      ))}
    </div>
  );
};

export default RecordList;
