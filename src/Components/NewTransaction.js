import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { v4 } from 'uuid'

function NewTransaction() {
    const [newTransaction, setNewTransaction] = useState({
        id: v4(),
        itemName: "",
        amount: 0,
        date: "",
        from: "",
        category: ""
    });
    let navigate = useNavigate();   

    function handleTextChange (event) {
        setNewTransaction({ ...newTransaction, [event.target.id]: event.target.value });
    }

    function handleSubmit (event) {
        event.preventDefault();
        axios.post(`${process.env.REACT_APP_API_URL}/transactions`, newTransaction)
        .then(() => {
            navigate("/transactions");
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
            onChange={handleTextChange}/>
            <label>Name: </label>
            <input 
            type="text" 
            id="itemName"
            onChange={handleTextChange}/>
            <label>From: </label>
            <input 
            type="text" 
            id="from"
            onChange={handleTextChange}/>
            <label>Amount: </label>
            <input 
            type="number" 
            id="amount"
            onChange={handleTextChange}/>
            <label>Category: </label>
            <input 
            type="text"
            id="category"
            onChange={handleTextChange}/>
            <input type="submit"/>
        </form>
    </div>
  )
}

export default NewTransaction