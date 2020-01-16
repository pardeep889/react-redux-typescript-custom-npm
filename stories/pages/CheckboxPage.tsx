import React from 'react';

//STORYBOOK
// import { action } from '@storybook/addon-actions';

//COMPONENT
import { Checkbox } from '@components/index';

const CheckboxPage = () => {
  return (
    <div>
      <h3 className="story-title">Checkbox Types</h3>
      <section className="m20">
        <div className="m20">
          <Checkbox>Default</Checkbox>
        </div>
        <div className="m20">
          <Checkbox >Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Checkbox>
        </div>
        <div className="m20">
          <Checkbox disabled >Disabled</Checkbox>
        </div>
      </section>
    </div>
  )
};

export default CheckboxPage;