import React from 'react';

//STORYBOOK
import { action } from '@storybook/addon-actions';

//COMPONENT
import { Button } from '@components/index';

const ButtonPage = () => {
  return (
    <div>
      <h3 className="story-title">Button Types</h3>
      <section className="m20">
        <h4 className="story-title">Primary</h4>
        <aside className="story-flex">
          <div>
            <h4>Full</h4>
            <div className="m20">
              <Button type ="primary">Primary</Button>
            </div>
            <div className="m20">
              <Button type ="primary" disabled>Disabled</Button>
            </div>
          </div>
          <div>
          <h4>Small</h4>
            <div className="m20">
              <Button type ="primary" size="small">small</Button>
            </div>
            <div className="m20">
              <Button type ="primary" size="small" disabled>small</Button>
            </div>
          </div>
        </aside>
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