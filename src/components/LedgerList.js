import React from 'react'
import PropTypes from 'prop-types'
import Ledger from './Ledger'

const LedgerList = ({ ledgers, onLedgerClick }) => (
    <div>
      <h1>Latest Ledgers</h1>
      <table>
        <thead>
        <tr>
          <th>Ledger ID</th>
          <th>Transaction Count</th>
          <th>Operation Count</th>
          <th>Closed</th>
        </tr>
        </thead>
        <tbody>

          {
            ledgers.map(ledger =>
              <Ledger
                  key={ledger.id}
                  {...ledger}
                  onClick={() => onLedgerClick(ledger.id)}
              />
          )}

        </tbody>

      </table>
    </div>
);

LedgerList.propTypes = {
  ledgers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onLedgerClick: PropTypes.func.isRequired
};

export default LedgerList