import React from 'react'
import PropTypes from 'prop-types'

const AssetPair = ({ onClick, completed, text, availableForIssuance, maxIssuanceAmount }) => (
    <tr className="c171"
        onClick={onClick}
        style={{
          textDecoration: completed ? 'line-through' : 'none'
        }}
    >
      <td className="c176 c179">{text}</td>
      <td>{availableForIssuance}</td>
      <td>{maxIssuanceAmount}</td>
    </tr>
)

AssetPair.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  availableForIssuance: PropTypes.string.isRequired,
  maxIssuanceAmount: PropTypes.string.isRequired
}

export default AssetPair
