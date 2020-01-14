import React from 'react';

//STORYBOOK
import { action } from '@storybook/addon-actions';

//COMPONENT
import { Button } from '@components/index';

const ButtonPage = () => {
  return (
    <div>
      <h3 className="story-title">Button Types</h3>
      <section>
        <h4 className="story-title">Primary</h4>
        <div className="m20">
          <Button type ="primary" onClick={action('Primary Button Clicked')}>Primary</Button>
        </div>
        <div className="m20">
          <Button type ="primary" disabled onClick={action('Disabled Button Clicked')}>Disabled</Button>
        </div>
      </section>

      <section>
        <h4 className="story-title">Secondary</h4>
        <div className="m20">
          <Button type ="secondary" onClick={action('Secondary (Full) Button Clicked')}>Secondary (Full)</Button>
        </div>
        <div className="m20">
          <Button type ="secondary" disabled >Disabled</Button>
        </div>
        <div className="m20">
          <Button type ="secondary" size="small" onClick={action('Secondary (Small) Button Clicked')}>Secondary (Small)</Button>
        </div>
        <div className="m20">
          <Button type ="secondary" size="small" disabled >Disabled</Button>
        </div>
      </section>

      <section>
        <h4 className="story-title">Text</h4>
        <div className="m20">
          <Button type ="text" onClick={action('Text Button Clicked')}>TEXT</Button>
        </div>
        <div className="m20">
          <Button type ="text" disabled >Disabled</Button>
        </div>
      </section>
    </div>
  )
}

export default ButtonPage;