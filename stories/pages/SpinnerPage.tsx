import React from 'react';
//STORYBOOK
// import { action } from '@storybook/addon-actions';

//COMPONENT
import { Spinner } from '@components/index';

const SpinnerPage = () => {
  return (
    <div>
      <h3 className="story-title">Spinner</h3>
      <section className="m20">
        <div className="m20">
          <Spinner min={-1} defaultValue={0}/>  Enabled
          <Spinner min={-1} defaultValue={0} disabled/>  Enabled

        </div>
      </section>
    </div>
  )
};

export default SpinnerPage;