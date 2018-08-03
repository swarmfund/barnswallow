import { connect } from 'react-redux'
import {toggleTransaction} from '../actions'
import TransactionList from '../components/TransactionList'

const getVisibleTransactions = (transactions, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return transactions;
    case 'SHOW_COMPLETED':
      return transactions.filter(t => t.completed);
    case 'SHOW_ACTIVE':
      return transactions.filter(t => !t.completed);
    default:
      throw new Error('Unknown filter: ' + filter)
  }
};

const mapStateToProps = (state) => ({
  transactions: getVisibleTransactions(state.transactions.present, state.visibilityFilter)
});

const mapDispatchToProps = ({
  onTransactionClick: toggleTransaction
});

const TransactionExplorer = connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionList);

export default TransactionExplorer