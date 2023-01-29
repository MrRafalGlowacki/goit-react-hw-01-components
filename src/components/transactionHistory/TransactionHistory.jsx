import React from 'react';
import PropTypes from 'prop-types';
import css from './TransactionHistory.module.css';

export const TransactionHistory = ({ items }) => {
  const table = items.map(operation => (
    <tr key={operation.id}>
      <td>{operation.type}</td>
      <td>{operation.amount}</td>
      <td>{operation.currency}</td>
    </tr>
  ));
  return (
    <table className={css['transaction-history']}>
      <thead>
        <tr>
          <th>Type</th>
          <th>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>{table}</tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      type: PropTypes.string,
      amount: PropTypes.string,
      currency: PropTypes.string,
    })
  ),
};
