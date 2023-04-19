import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 } from 'uuid'

function NewTransaction() {
    const [newTransaction, setNewTransaction] = useState({
        id: v4(),
        itemName: "",
        amount: 0,
        deposit: false,
        date: "",
        from: "",
        category: ""
    });
    const [length, setLength] = useState();
    let navigate = useNavigate();
    
    useEffect(() => {
        axios.get(`${process.env.REACT_APP_API_URL}/transactions`)
        .then((res) => {
            setLength(res.data.length)
        })
    }, [])

    function handleTextChange (event) {
        setNewTransaction({ ...newTransaction, [event.target.id]: event.target.value });
    }

    function handleCheckboxChange (event) {
        setNewTransaction({ ...newTransaction, deposit: event.target.checked});
    }

    function handleSubmit (event) {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/transactions`, newTransaction)
        .then(() => {
            navigate(`/transaction/${length}`);
        })
        .catch((error) => {
            console.log("catch", error);
        })
    }

  return (
    <div className="formCard">
        <h3>Add New Transaction</h3>
        <form onSubmit={handleSubmit}>
            <label htmlFor='date'>Date: </label>
            <input 
            type="date" 
            id="date" 
            name="date"
            onChange={handleTextChange}/>
            <label htmlFor='itemName'>Name: </label>
            <input 
            type="text" 
            id="itemName"
            name="itemName"
            onChange={handleTextChange}/>
            <label htmlFor='from'>From: </label>
            <input 
            type="text" 
            id="from"
            name="from"
            onChange={handleTextChange}/>
            <label htmlFor='amount'>Amount: </label>
            <input 
            type="number" 
            id="amount"
            name="amount"
            onChange={handleTextChange}/>
            <label htmlFor='deposit'>Deposit: </label>
            <input 
            type="checkbox" 
            id="deposit"
            name="deposit"
            onChange={handleCheckboxChange}
            value={newTransaction.deposit}/>
            <label htmlFor='category'>Category: </label>
            <input 
            type="text"
            id="category"
            name="category"
            onChange={handleTextChange}/>
            <div>
                <button type="submit" className="buttonSubmit">Submit</button>
            </div>
        </form>
    </div>
  )
}

export default NewTransaction