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
            <Selector type="primary" icon={<Guest/>} title="city" promptText="Choose City"/>
          </div>
          <div className="m20">
            <h6 className="mb20">Underline</h6>
            <Selector type="primary" icon={<Guest/>} title="city" promptText="Choose City" underline/>
          </div>
          <div className="m20">
            <h6 className="mb20">Value Selected</h6>
            <Selector type="primary" icon={<Guest/>} title="city" promptText="Choose City" selectedValue="New york city"/>
          </div>
          <div className="m20">
            <h6 className="mb20">Pop Up</h6>
            <Selector type="primary" icon={<Guest/>} title="city" promptText="Choose City" selectedValue="New york city" popup/>
          </div>
        </div>
      </section>
      <section>
        <h4 className="story-title">Secondary</h4>
        <div className="m20">
          <div className="m20">
            <h6 className="mb20">Normal</h6>
            <Selector type="secondary" icon={<Guest/>} selectedValue="new york city" />
          </div>
          <div className="m20">
            <h6 className="mb20">Disabled</h6>
            <Selector type="secondary" icon={<Guest/>} disabled selectedValue="new york city" />
          </div>
        </div>
      </section>
    </div>
  )
}

export default SelectorPage;