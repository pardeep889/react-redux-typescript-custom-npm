import React from 'react';

//STORYBOOK
// import { action } from '@storybook/addon-actions';

//COMPONENT
import { Toggle } from '@components/index';

const TogglePage = () => {
  return (
    <div>
      <h3 className="story-title">Toggle</h3>
      <section className="m20">
        <div className="m20">
          <Toggle/>  Enabled
        </div>
        <div className="m20" >
          <Toggle defaultChecked/> Enabled (Default Checked)
        </div>
        <div className="m20">
          <Toggle disabled/> Disabled
        </div>
        <div className="m20">
          <Toggle disabled defaultChecked/> Disabled (Default Checked)
        </div>
      </section>
    </div>
  )
};

export default TogglePage;