import React from 'react';

//STORYBOOK
// import { action } from '@storybook/addon-actions';

//COMPONENT
import { PopOver, Button, Input } from '@components/index';

const SampleLogin = () => {
  return(
    <div>
      <Input title="Email" placeholder="email@email.com" />
      <Input title="password" placeholder="password" />
      <Button type="primary">Login</Button>
    </div>
  )
}

const PopOverPage = () => {
  return (
    <div>
      <h3 className="story-title">Pop Over</h3>
      <section>
        <h4 className="story-title">Types</h4>
        <div className="ml100">
          <PopOver placement="bottomRight" content={<SampleLogin />}>
            <Button type="primary" size="full">click me</Button>
          </PopOver>
        </div>
      </section>
    </div>
  )
};

export default PopOverPage;