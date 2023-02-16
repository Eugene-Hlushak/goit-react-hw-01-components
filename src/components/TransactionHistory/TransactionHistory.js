import PropTypes from 'prop-types';
import { Table, Row, Head, Type } from './TransactionHistory.styled';

export default function TransactionHistory({ items }) {
  return (
    <Table>
      <thead>
        <Row>
          <Head>Type</Head>
          <Head>Amount</Head>
          <Head>Currency</Head>
        </Row>
      </thead>

      <tbody>
        {items.map(({ id, type, amount, currency }) => {
          return (
            <Row key={id}>
              <Type>{type}</Type>
              <td>{amount}</td>
              <td>{currency}</td>
            </Row>
          );
        })}
      </tbody>
    </Table>
  );
}

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
