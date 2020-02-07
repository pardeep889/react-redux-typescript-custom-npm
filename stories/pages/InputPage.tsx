import React from 'react';

//COMPONENT
import { Input, DropDown } from '@components/index';
import Guest from '@icon/Guest';


const dropDownOptions = {
  defaultValue: "UNITED STATES",
  optionList: [
    {
      icon: <Guest/>,
      prefixValue: "+1",
      value: "UNITED STATES"
    },
    {
      icon: <Guest/>,
      prefixValue: "+44",
      value: "UNITED KINGDOM"
    }
  ]
}

const errorMessage = "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."

const InputPage = () => {
  return (
    <div>
      <h3 className="story-title">Input Field Types</h3>
      <section className="m20">
        <h4 className="mb20">Text</h4>
        <div className="m20">
          <Input type="text" title="Email" placeholder="Normal" />
        </div>
        <div className="m20">
          <Input type="text" title="Email" disabled placeholder="Disabled" />
        </div>
        <div className="m20">
          <Input type="text" title="Email" error={errorMessage} placeholder="Error" />
        </div>
      </section>
      <section className="m20">
        <h4 className="mb20">Dropdown</h4>
        <div className="m20">
          <Input type="dropdown" title="Number" placeholder="000-0000" dropDownOptions={dropDownOptions}/>
        </div>
        <div className="m20">
          <Input type="dropdown" title="Number" placeholder="000-0000" dropDownOptions={dropDownOptions} disabled/>
        </div>
        <div className="m20">
          <Input type="dropdown" title="Number" placeholder="000-0000" dropDownOptions={dropDownOptions} error={errorMessage}/>
        </div>
      </section>
    </div>
  )
};

export default InputPage;