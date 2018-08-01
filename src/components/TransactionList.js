import React from 'react'
import PropTypes from 'prop-types'
import Transaction from './Transaction'

const TransactionList = ({ transactions, onTransactionClick }) => (
    <div>
    <h1>Latest Transactions</h1>
      <table>
        <thead>
          <tr>
            <th>Transaction ID</th>
            <th>Ledger</th>
            <th>Fee</th>
            <th>Timestamp</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            {transactions.map(transaction =>
                <Transaction
                    key={transaction.id}
                    {...transaction}
                    onClick={() => onTransactionClick(transaction.id)}
                />
            )}
          </tr>
        </tbody>

      </table>
    </div>
);

TransactionList.propTypes = {
  transactions: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onTransactionClick: PropTypes.func.isRequired
};

export default TransactionList