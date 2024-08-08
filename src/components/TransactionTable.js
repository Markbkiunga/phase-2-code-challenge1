import React from 'react';
import TransactionTableHeading from './TransactionTableHeading';
import Transaction from './Transaction';

function TransactionTable({ transactions }) {
  return (
    <table className='transactions-table'>
      <thead className='transactions-table-heading'>
        <TransactionTableHeading />
      </thead>
      <tbody className='transactions-table-body'>
        <Transaction transactions={transactions} />
      </tbody>
    </table>
  );
}

export default TransactionTable;