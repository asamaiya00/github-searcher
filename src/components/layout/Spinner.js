import React, { Fragment } from 'react';
import spinner from './spinner.gif';

const Spinner = () => (
  <Fragment>
    <img
      src={spinner}
      alt="Loading..."
      style={{ wigth: '20px', margin: 'auto' }}
    />
  </Fragment>
);

export default Spinner;
