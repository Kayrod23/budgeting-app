import React, { useState, useEffect } from 'react'
import axios from 'axios';
import { Link } from 'react-router-dom';

function Transactions() {
  const [transactions, setTransactions] = useState([]);
  let sum = 0;

  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions`)
    .then((res) => {
      setTransactions(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, []);

  transactions.forEach(transaction => {
    if(transaction.deposit) {
      sum += parseInt(transaction.amount);
    } else {
      sum -= parseInt(transaction.amount);
    }
  });

  function colorCode (color) {
    if (sum >= 100) {
      color = "green"
    } else if (sum <= 0) {
      color = "red"
    } else {
      color = "yellow"
    }
    return color
  }

  return (
    <div className="transactionCard">
      <h1>Transactions</h1>
      <h3>Bank Account Total: <p className={colorCode()}>{sum}</p></h3>
      <section>
      <table>
        <tbody>
            {transactions ? transactions.map((transaction, index) =>  
              <tr key={index}>
                <td>{transaction.date}</td>
                <td><Link to={`/transaction/${index}`}>{transaction.itemName}</Link></td>
                <td>{transaction.deposit ? "" : "-"}${transaction.amount}</td>
              </tr>
            ) : null}
            </tbody>
      </table>
      </section>
    </div>
  )
}

export default Transactions