import React from 'react';

function TransactionTableHeading() {
  return (
    <tr className='transactions-table-heading-row'>
      <th>Date</th>
      <th>Description</th>
      <th>Category</th>
      <th>Amount</th>
    </tr>
  );
}

export default TransactionTableHeading;