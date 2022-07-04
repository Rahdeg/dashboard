import React from 'react';

import { Header, Sparked } from '../../component';

const Stalked = () => (
  <div className="m-4 md:m-10 mt-24 p-10 bg-white dark:bg-secondary-dark-bg rounded-3xl">
    <Header category="Stacked" title="Revenue Breakdown" />
    <div className="w-full">
      <Sparked/>
    </div>
  </div>
);

export default Stalked;