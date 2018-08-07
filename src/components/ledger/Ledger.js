import React from 'react'
import PropTypes from 'prop-types'

const Ledger = ({ onClick, completed, text, transactionCount, operationCount, timestamp }) => (
    <tr className="c171"
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
    >
      <td className="c176 c179">{text}</td>
      <td>{transactionCount}</td>
      <td>{operationCount}</td>
      <td>{timestamp}</td>
    </tr>
)

Ledger.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  transactionCount: PropTypes.string.isRequired,
  operationCount: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired
}

export default Ledger
