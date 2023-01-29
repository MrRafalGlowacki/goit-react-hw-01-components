import React from 'react';
import PropTypes from 'prop-types';
import css from './Statistics.module.css';

export const Statistics = ({ title, stats }) => {
  const filesList = stats.map(stat => (
    <li key={stat.id} className={css.item}>
      <span className={css.label}>{stat.label}</span>
      <span className={css.percentage}>{stat.percentage}%</span>
    </li>
  ));
  return (
    <>
      <section className={css.statistics}>
        {title && <h2 className={css.title}>{title}</h2>}

        <ul className={css['stat-list']}>{filesList}</ul>
      </section>
    </>
  );
};

Statistics.propTypes = {
  stats: PropTypes.array,
  stat: PropTypes.shape({
    id: PropTypes.string,
    label: PropTypes.string,
    percentage: PropTypes.number,
  }),
  title: PropTypes.string,
};
