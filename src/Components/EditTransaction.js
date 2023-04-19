import React, { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import { v4 } from 'uuid'

function EditTransaction() {
    const [editTransaction, setEditTransaction] = useState({
        id: v4(),
        itemName: "",
        amount: 0,
        deposit: false,
        date: "",
        from: "",
        category: ""
    });
    let navigate = useNavigate();   
    const { index } = useParams();

    function handleTextChange (event) {
        setEditTransaction({ ...editTransaction, [event.target.id]: event.target.value });
    }

    function handleCheckboxChange (event) {
        setEditTransaction({ ...editTransaction, deposit: event.target.checked});
    }

    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions/${index}`)
        .then((res) => {
            setEditTransaction(res.data);
        })
        .catch((error) => {
            console.log("catch", error);
        })
    }, [index])

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
    <div className="formCard">
    <form onSubmit={handleSubmit}>
        <label htmlFor='date'>Date: </label>
        <input 
        type="date" 
        id="date"
        name="date" 
        onChange={handleTextChange}
        value={editTransaction.date}/>
        <label htmlFor='itemname'>Name: </label>
        <input 
        type="text" 
        id="itemName"
        name="itemName"
        onChange={handleTextChange}
        value={editTransaction.itemName}/>
        <label html="from">From: </label>
        <input 
        type="text" 
        id="from"
        name="from"
        onChange={handleTextChange}
        value={editTransaction.from}/>
        <label htmlFor='amount'>Amount: </label>
        <input 
        type="number" 
        id="amount"
        name="amount"
        onChange={handleTextChange}
        value={editTransaction.amount}/>
        <label htmlFor='deposit'>Toggle Deposit: </label>
        <input 
        type="checkbox" 
        id="deposit"
        name="deposit"
        checked={editTransaction.deposit} 
        onChange={handleCheckboxChange}/>
        <label htmlFor='category'>Category: </label>
        <input 
        type="text"
        id="category"
        name="category"
        onChange={handleTextChange}
        value={editTransaction.category}/>
        <div>
            <button type="submit" className="buttonSubmit">Submit</button>
        </div>
    </form>
</div>
  )
}

export default EditTransaction