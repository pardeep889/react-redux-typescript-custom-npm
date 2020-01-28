import React from 'react';

//COMPONENT
import { Selector } from '@components/index';

const SelectorPage = () => {
  return (
    <div>
      <h3 className="story-title">Selector Types</h3>
      <section>
        <h4 className="story-title">Primary</h4>
        <div className="m20">
          <Selector type="primary"/>
        </div>
      </section>
    </div>
  )
}

export default SelectorPage;