import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Transactions() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions`)
    .then((res) => {
      setTransactions(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  return (
    <div>
      <table>
        <tbody>
            {transactions ? transactions.map((transaction, index) => 
              <tr key={index}>
                <td>{transaction.date}</td>
                <td><Link to={`/transaction/${index}`}>{transaction.itemName}</Link></td>
                <td>${transaction.amount}</td>
              </tr>
            ) : null}
            </tbody>
      </table>
    </div>
  )
}

export default Transactions