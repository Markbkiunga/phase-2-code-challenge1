import React from 'react';

function Transaction({ transactions }) {
  const displayTransactions = transactions.map((transaction) => {
    return(
    <tr key={transaction.id} className='transaction-row'>
      <td>{transaction.date}</td>
      <td>{transaction.description}</td>
      <td>{transaction.category}</td>
      <td>{transaction.amount}</td>
    </tr>);
  });
  return <>{displayTransactions}</>;
}

export default Transaction;