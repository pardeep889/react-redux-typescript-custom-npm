import React from 'react';

//COMPONENT
import { Selector } from '@components/index';
import Guest from '@icon/Guest';

const SelectorPage = () => {
  return (
    <div>
      <h3 className="story-title">Selector Types</h3>
      <section>
        <h4 className="story-title">Primary</h4>
        <div className="m20 story-background">
          <div className="m20">
            <h6 className="mb20">Normal</h6>
            <Selector type="primary" icon={<Guest/>} label="city">Choose City</Selector>
          </div>
          <div className="m20">
            <h6 className="mb20">Underline</h6>
            <Selector type="primary" icon={<Guest/>} label="city" value="" underline>Choose City</Selector>
          </div>
          <div className="m20">
            <h6 className="mb20">Value Selected</h6>
            <Selector type="primary" icon={<Guest/>} valueSelected label="city">New York City</Selector>
          </div>
          <div className="m20">
            <h6 className="mb20">Pop Up</h6>
            <Selector type="primary" icon={<Guest/>} valueSelected popUp label="city">Choose City</Selector>
          </div>
        </div>
      </section>
      <section>
        <h4 className="story-title">Secondary</h4>
        <div className="m20">
          <div className="m20">
            <h6 className="mb20">Normal</h6>
            <Selector type="secondary" icon={<Guest/>} label="city">new york city</Selector>
          </div>
          <div className="m20">
            <h6 className="mb20">Disabled</h6>
            <Selector type="secondary" icon={<Guest/>} disabled label="city">new york city</Selector>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SelectorPage;