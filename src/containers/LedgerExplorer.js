import { connect } from 'react-redux'
import {toggle} from '../components/ledger/actions'
import LedgerList from '../components/ledger/LedgerList'

// const getVisibleLedgers = (ledgers, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return ledgers;
//     case 'SHOW_COMPLETED':
//       return ledgers.filter(t => t.completed);
//     case 'SHOW_ACTIVE':
//       return ledgers.filter(t => !t.completed);
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// };

const mapStateToProps = (state) => ({
  ledgers: state.ledgers
});

const mapDispatchToProps = ({
  onLedgerClick: toggle
});

const LedgerExplorer = connect(
    mapStateToProps,
    mapDispatchToProps
)(LedgerList);

export default LedgerExplorer
