import React, { useState } from 'react';

function SearchBar({ originalTransactions, setTransactions }) {
  const [searchByDescription, setSearchByDescription] = useState('');

  function handleSearch(event) {
    const searchValue = event.target.value;
    setSearchByDescription(searchValue);

    const filteredTransactions = originalTransactions.filter((transaction) => {
      return transaction.description.toLowerCase().includes(searchValue.toLowerCase());
    });

    setTransactions(filteredTransactions);
  }

  return (
    <div className="searchbar-container">
      <input
        className="searchbar"
        type="text"
        onChange={handleSearch}
        placeholder="Search Transaction"
        value={searchByDescription}
      />
    </div>
  );
}

export default SearchBar;