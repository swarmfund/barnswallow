import { connect } from 'react-redux'
import AssetPairList from '../components/assetPairs/AssetPairList'

const mapStateToProps = (state) => ({
  assetPairs: state.assetPairs
});

const mapDispatchToProps = ({
//  onTransactionClick: --
});

const ExploreAssetPairs = connect(
    mapStateToProps,
    mapDispatchToProps
)(AssetPairList);

export default ExploreAssetPairs
