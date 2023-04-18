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
    }, []);

    function handleDelete () {
        axios.delete(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
        .then(() => {
            navigate("/transactions");
        })
    }

  return (
    <div>
        <h3>{transaction.itemName}</h3>
        <h3>{transaction.amount}</h3>
        <h3>{transaction.date}</h3>
        <h3>{transaction.category}</h3>
        <h3>{transaction.from}</h3>
        <h3>{transaction.id}</h3>
        <button><Link to={"/transactions"}>Back</Link></button>
        <button><Link to={`/transaction/${index}/edit`}>Edit</Link></button>
        <button onClick={handleDelete}>Delete</button>
    </div>
  )
}

export default Transaction