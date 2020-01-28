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
            <Selector 
              type="primary" 
              icon={<Guest/>}
            >
              Choose City    
            </Selector>
          </div>
        </div>
      </section>
    </div>
  )
}

export default SelectorPage;