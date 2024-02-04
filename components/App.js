import React, { useState } from 'react';
import TransactionsTable from './TransactionsTable';
import TransactionForm from './TransactionForm';


function App() {
  const [transactions, setTransactions] = useState([]);

  const addTransaction = (newTransaction) => {
    setTransactions([...transactions, newTransaction]);
  };

  const filteredTransactions = transactions.filter(transaction =>
    transaction.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      <h1>Transaction Management</h1>
      <TransactionForm onAddTransaction={addTransaction} />
      <TransactionsTable transactions={transactions} onSearch={filterTransactions} />
    </div>
  );
}

export default App;
