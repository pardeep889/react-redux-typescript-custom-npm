import React from 'react';

//COMPONENT
import { Button } from '@components/index';
import Guest from '@icon/Guest';
import Arrow from '@icon/Arrow';

const guest = <Guest />
const arrow = <Arrow type="left" tail/>

const ButtonPage = () => {
  return (
    <div>
      <h3 className="story-title">Button Types</h3>
      <section className="m20">
        <h4 className="story-title">Primary Button</h4>
        <aside className="story-flex">
          <div>
            <h4 className="story-title">Full</h4>
            <div className="m20">
              <Button type ="primary">Go to payment</Button>
            </div>
            <div className="m20">
              <Button type ="primary" disabled>go to payment</Button>
            </div>
          </div>
          <div>
          <h4 className="story-title">Small</h4>
            <div className="m20">
              <Button type ="primary" size="small">ok</Button>
            </div>
            <div className="m20">
              <Button type ="primary" size="small" disabled>ok</Button>
            </div>
          </div>
        </aside>
      </section>

      <section className="m20">
        <h4 className="story-title">Secondary Button</h4>
        <aside className="story-flex">
          <div>
            <h4 className="story-title">Full</h4>
            <div className="m20">
              <Button type ="secondary">add guest</Button>
            </div>
            <div className="m20">
              <Button type ="secondary" disabled >add guest</Button>
            </div>
          </div>
          <div>
            <h4 className="story-title">Icon</h4>
            <div className="m20">
              <Button type ="secondary" icon={guest}>save pdf file</Button>
            </div>
            <div className="m20">
              <Button type ="secondary" disabled icon={guest}>save pdf file</Button>
            </div>
          </div>
          <div>
            <h4 className="story-title">Small</h4>
            <div className="m20">
              <Button type ="secondary" size="small">add</Button>
            </div>
            <div className="m20">
              <Button type ="secondary" size="small" disabled >add</Button>
            </div>
          </div>
        </aside>
      </section>

      <section className="m20">
        <h4 className="story-title">Text Button</h4>
        <aside className="story-flex">
          <div>
            <h4 className="story-title">Text</h4>
            <div className="m20">
              <Button type ="text">cancel</Button>
            </div>
            <div className="m20">
              <Button type ="text" disabled >cancel</Button>
            </div>
          </div>
          <div>
            <h4 className="story-title">Text & Icon</h4>
            <div className="m20">
              <Button type ="text" icon={guest} >send invitation</Button>
            </div>
            <div className="m20">
              <Button type ="text" icon={guest} disabled >cancel</Button>
            </div>
          </div>
          <div>
            <h4 className="story-title">Icon</h4>
            <div className="m20">
              <Button type ="icon" icon={arrow}/>
            </div>
            <div className="m20">
              <Button type ="icon" icon={arrow} disabled/>
            </div>
          </div>
        </aside>
      </section>
    </div>
  )
}

export default ButtonPage;