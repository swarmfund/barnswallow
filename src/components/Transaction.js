import React from 'react'
import PropTypes from 'prop-types'

const Transaction = ({ onClick, completed, text, ledger, fee, timestamp }) => (
    <tr
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
    >
      <td>{text}</td>
      <td>{ledger}</td>
      <td>{fee}</td>
      <td>{timestamp}</td>
    </tr>
)

Transaction.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  ledger: PropTypes.string.isRequired,
  fee: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
}

export default Transaction