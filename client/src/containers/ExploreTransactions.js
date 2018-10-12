import { connect } from 'react-redux'
import {toggleTransaction} from '../components/transactions/actions'
import TransactionList from '../components/transactions/TransactionList'

const mapStateToProps = (state) => ({
  transactions: state.transactions
});

const mapDispatchToProps = ({
  onTransactionClick: toggleTransaction
});

const ExploreTransactions = connect(
    mapStateToProps,
    mapDispatchToProps
)(TransactionList);

export default ExploreTransactions
