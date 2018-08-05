import React from 'react'
import PropTypes from 'prop-types'
import Ledger from './Ledger'

const LedgerList = ({ledgers = [], onLedgerClick}) => (
    <div className="content">
      <h1>Latest Ledgers</h1>
      <div>
        <div className="c102 c106 c103">
          <table className="c169">
            <thead className="c170">
            <tr className="c171 c172">
              <th className="c176 c179 c178">Ledger ID</th>
              <th className="c176 c179 c178">Transaction Count</th>
              <th className="c176 c179 c178">Operation Count</th>
              <th className="c176 c179 c178">Closed</th>
            </tr>
            </thead>
            <tbody className="c183">
            {
              ledgers.map(
                  ledger =>
                      <Ledger key={ledger.id} {...ledger} onClick={() => onLedgerClick(ledger.id)}/>
              )
            }
            </tbody>

          </table>
        </div>
        <div className="home-more-links"><span className="c131 c141 c148"><a
            href="">More transactions</a></span></div>
      </div>
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
