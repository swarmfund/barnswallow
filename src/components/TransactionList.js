import React from 'react'
import PropTypes from 'prop-types'
import Transaction from './Transaction'

const TransactionList = ({ transactions = [], onTransactionClick }) => (
    <div className="content">
    <h2>Latest Transactions</h2>
      <div>
        <div className="c102 c106 c103">
        <table className="c169">
          <thead className="c170">
            <tr className="c171 c172">
              <th className="c176 c179 c178">Transaction ID</th>
              <th className="c176 c179 c178">Ledger</th>
              <th className="c176 c179 c178">Fee</th>
              <th className="c176 c179 c178">Timestamp</th>
            </tr>
          </thead>
          <tbody className="c183">

              {
                transactions.map(transaction =>
                  <Transaction
                      key={transaction.id}
                      {...transaction}
                      onClick={() => onTransactionClick(transaction.id)}
                  />
              )}

          </tbody>

        </table>
        </div>
        <div className="home-more-links"><span className="c131 c141 c148"><a
            href="">More transactions</a></span></div>
      </div>
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