import React from 'react';

//STORYBOOK
import { action } from '@storybook/addon-actions';

//COMPONENT
import { Button } from '@components/index';
import Guest from '@icon/Guest';

const icon = <Guest />

const ButtonPage = () => {
  return (
    <div>
      <h3 className="story-title">Button Types</h3>
      <section className="m20">
        <h4 className="story-title">Primary</h4>
        <aside className="story-flex">
          <div>
            <h4 className="story-title">Full</h4>
            <div className="m20">
              <Button type ="primary">Primary</Button>
            </div>
            <div className="m20">
              <Button type ="primary" disabled>Disabled</Button>
            </div>
          </div>
          <div>
          <h4 className="story-title">Small</h4>
            <div className="m20">
              <Button type ="primary" size="small">small</Button>
            </div>
            <div className="m20">
              <Button type ="primary" size="small" disabled>small</Button>
            </div>
          </div>
        </aside>
      </section>

      <section className="m20">
        <h4 className="story-title">Secondary</h4>
        <aside className="story-flex">
          <div>
            <h4 className="story-title">Full</h4>
            <div className="m20">
              <Button type ="secondary">Secondary</Button>
            </div>
            <div className="m20">
              <Button type ="secondary" disabled >Secondary</Button>
            </div>
          </div>
          <div>
            <h4 className="story-title">Icon</h4>
            <div className="m20">
              <Button type ="secondary" icon={icon}>Secondary</Button>
            </div>
            <div className="m20">
              <Button type ="secondary" disabled icon={icon}>Secondary</Button>
            </div>
          </div>
          <div>
            <h4 className="story-title">Small</h4>
            <div className="m20">
              <Button type ="secondary" size="small">Small</Button>
            </div>
            <div className="m20">
              <Button type ="secondary" size="small" disabled >Small</Button>
            </div>
          </div>
        </aside>
      </section>

      <section>
        <h4 className="story-title">Text</h4>
        <div className="m20">
          <Button type ="text">TEXT</Button>
        </div>
        <div className="m20">
          <Button type ="text" disabled >Disabled</Button>
        </div>
      </section>
    </div>
  )
}

export default ButtonPage;