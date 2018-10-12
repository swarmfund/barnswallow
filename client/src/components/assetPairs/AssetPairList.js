import React from 'react'
import PropTypes from 'prop-types'
import AssetPair from './AssetPair'

const AssetPairList = ({ assetPairs = [], onAssetPairClick }) => (
    <div className="content">
    <h2>Latest Asset Pairs</h2>
      <div>
        <div className="c102 c106 c103">
        <table className="c169">
          <thead className="c170">
            <tr className="c171 c172">
              <th className="c176 c179 c178">Asset Code</th>
              <th className="c176 c179 c178">Available</th>
              <th className="c176 c179 c178">Max</th>
            </tr>
          </thead>
          <tbody className="c183">

              {
                assetPairs.map(assetPair =>
                  <AssetPair
                      key={assetPair.id}
                      {...assetPair}
                      onClick={() => onAssetPairClick(assetPair.id)}
                  />
              )}

          </tbody>

        </table>
        </div>
        <div className="home-more-links"><span className="c131 c141 c148"><a
            href="">More asset pairs</a></span></div>
      </div>
    </div>
);

AssetPairList.propTypes = {
  assetPairs: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired
  }).isRequired).isRequired,
  onAssetPairClick: PropTypes.func.isRequired
};

export default AssetPairList
