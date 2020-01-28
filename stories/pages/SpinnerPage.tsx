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
        <Spinner min={0} max={9} defaultValue={5}/>  Normal
      </div>
      <div className="m20">
        <Spinner min={0} max={9} defaultValue={0}/>  At minimum
      </div>
      <div className="m20">
        <Spinner min={0} max={9} defaultValue={9}/>  At maximum
      </div>
      <div className="m20">
        <Spinner min={-1} max={9} defaultValue={0} disabled/>  Disabled
      </div>
    </section>
  </div>
    )
  };
  
  export default SpinnerPage;