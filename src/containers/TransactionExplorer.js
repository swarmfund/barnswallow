import { connect } from 'react-redux'
import {toggleTransaction} from '../components/transactions/actions'
import TransactionList from '../components/transactions/TransactionList'

// const getVisibleTransactions = (transactions, filter) => {
//   switch (filter) {
//     case 'SHOW_ALL':
//       return transactions;
//     case 'SHOW_COMPLETED':
//       return transactions.filter(t => t.completed);
//     case 'SHOW_ACTIVE':
//       return transactions.filter(t => !t.completed);
//     default:
//       throw new Error('Unknown filter: ' + filter)
//   }
// };

const mapStateToProps = (state) => ({
  transactions: state.transactions
});

const mapDispatchToProps = ({
  onTransactionClick: toggleTransaction
});

const TransactionExplorer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionList);

export default TransactionExplorer
