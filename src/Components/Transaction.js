import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';

function Transaction() {
  const [transaction, setTransaction] = useState({});
  const { index } = useParams();
  let navigate = useNavigate();
  
  useEffect(() => {
    axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
    .then((res) => {
      setTransaction(res.data);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [index]);

  function handleDelete () {
    axios.delete(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
    .then(() => {
      navigate("/transactions");
    })
  }

console.log(transaction.deposit)
  return (
    <div className="indexCard">
      <h3>Transaction Details</h3>
        <p><strong>Item Name :</strong> {transaction.itemName}</p>
        <p><strong>Amount :</strong> {transaction.deposit ? "" : "-"}${transaction.amount}</p>
        <p><strong>Date :</strong> {transaction.date}</p>
        <p><strong>Item Category :</strong> {transaction.category}</p>
        <p><strong>From :</strong> {transaction.from}</p>
        <p><strong>Item Id :</strong> {transaction.id}</p>
        <button><Link to={"/transactions"}>Back</Link></button>
        <button><Link to={`/transaction/${index}/edit`}>Edit</Link></button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Transaction