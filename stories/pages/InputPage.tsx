import React from 'react';

//STORYBOOK
// import { action } from '@storybook/addon-actions';

//COMPONENT
import { Input } from '@components/index';

const InputPage = () => {
  return (
    <div>
      <h3 className="story-title">Input Field Types</h3>
      <section className="m20">
        <h4 className="mb20">Text</h4>
        <div className="m20">
          <Input type="text" title="Email" placeholder="Normal" />
        </div>
        <div className="m20">
          <Input type="text" title="Email" disabled placeholder="Disabled" />
        </div>
        <div className="m20">
          <Input type="text" title="Email" error="Invalid email adress" placeholder="Error" />
        </div>
      </section>
    </div>
  )
};

export default InputPage;