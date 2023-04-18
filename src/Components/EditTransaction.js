import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 } from 'uuid'

function EditTransaction() {
    const [editTransaction, setEditTransaction] = useState({
        id: v4(),
        itemName: "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    });
    let navigate = useNavigate();   
    const { index } = useParams();

    function handleTextChange (event) {
        setEditTransaction({ ...editTransaction, [event.target.id]: event.target.value });
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
        .then((res) => {
            setEditTransaction(res.data);
        })
        .catch((error) => {
            console.log("catch", error);
        })
    }, [])

    function handleSubmit (event) {
        event.preventDefault();
        axios.put(`${process.env.REACT_APP_API_URL}/transactions/${index}`, editTransaction)
        .then(() => {
            navigate(`/transaction/${index}`);
        })
        .catch((error) => {
            console.log("catch", error);
        })
    }

  return (
    <div>
    <form onSubmit={handleSubmit}>
        <label>Date: </label>
        <input 
        type="text" 
        id="date" 
        onChange={handleTextChange}
        value={editTransaction.date}/>
        <label>Name: </label>
        <input 
        type="text" 
        id="itemName"
        onChange={handleTextChange}
        value={editTransaction.itemName}/>
        <label>From: </label>
        <input 
        type="text" 
        id="from"
        onChange={handleTextChange}
        value={editTransaction.from}/>
        <label>Amount: </label>
        <input 
        type="number" 
        id="amount"
        onChange={handleTextChange}
        value={editTransaction.amount}/>
        <label>Category: </label>
        <input 
        type="text"
        id="category"
        onChange={handleTextChange}
        value={editTransaction.category}/>
        <input type="submit"/>
    </form>
</div>
  )
}

export default EditTransaction