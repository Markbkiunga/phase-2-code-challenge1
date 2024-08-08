import React, { useState } from 'react';

function Form({ transactions, setTransactions }) {
  const [date, setDate] = useState('2024-08-07');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState('');
  const [amount, setAmount] = useState('');
  function handleFormSubmit(event) {
    event.preventDefault();
    const formData = {
      date: date,
      description: description,
      category: category,
      amount: amount,
    };
    fetch('https://bank-of-flatiron-backend-ebon.vercel.app/transactions/', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((addedTransaction) =>
        setTransactions([...transactions, addedTransaction])
      );
  }
  return (
    <div className="form-container">
      <form className="transactions-form" onSubmit={handleFormSubmit}>
        <input
          type="date"
          name="date"
          placeholder="Enter Date"
          onChange={(e) => setDate(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          name="description"
          placeholder="Enter Description"
          onChange={(e) => setDescription(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          name="category"
          placeholder="Enter Category"
          onChange={(e) => setCategory(e.target.value)}
          required
          className="form-input"
        />
        <input
          type="text"
          name="amount"
          placeholder="Enter Amount"
          onChange={(e) => setAmount(e.target.value)}
          required
          className="form-input"
        />
        <button className="add-transaction-button">Add Transaction</button>
      </form>
    </div>
  );
}

export default Form;
