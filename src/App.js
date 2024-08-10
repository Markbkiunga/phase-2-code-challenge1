import './App.css';
import Heading from './components/Heading';
import Form from './components/Form';
import TransactionTable from './components/TransactionTable';
import { useEffect, useState } from 'react';
import SearchBar from './components/SearchBar';

function App() {
  const [transactions, setTransactions] = useState([]);
  const [originalTransactions, setOriginalTransactions] = useState([]);

  useEffect(() => {
    fetch('https://bank-of-flatiron-backend-ebon.vercel.app/transactions/')
      .then((response) => response.json())
      .then((transactions) => {
        setTransactions(transactions);
        setOriginalTransactions(transactions); 
      });
  }, []);

  return (
    <div className="App">
      <Heading />
      <Form transactions={transactions} setTransactions={setTransactions} />
      <SearchBar
        originalTransactions={originalTransactions} 
        setTransactions={setTransactions}
      />
      <TransactionTable transactions={transactions} />
      <a href="https://github.com/Markbkiunga" target="_blank" rel="noreferrer">
        Feel free to check out my Github
      </a>
    </div>
  );
}

export default App;