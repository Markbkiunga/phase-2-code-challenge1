import React, { useState } from 'react';

function SearchBar({ transactions, setTransactions }) {
  const [searchByDescription, setSearchByDescription] = useState('');

  function handleSearch(event) {
    setSearchByDescription(
      (searchByDescription) => (searchByDescription = event.target.value)
    );

    const filteredTransactions = transactions.filter((transaction) => {
      return transaction.description.includes(searchByDescription);
    });

    setTransactions(filteredTransactions);
  }

  return (
    <div className='searchbar-container'>
      <input
      className='searchbar'
        type="text"
        onChange={handleSearch}
        placeholder="Search Transaction"
        value={searchByDescription}
      />
    </div>
  );
}

export default SearchBar;