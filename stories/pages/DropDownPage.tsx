
import React from 'react';

//STORYBOOK
// import { action } from '@storybook/addon-actions';

//COMPONENT
import { DropDown } from '@components/index';
import Guest from '@icon/Guest';

const guestIcon = <Guest />
const dropDownSample = [
  { 
    prefixValue: "+1",
    value: "value 1",
    icon: guestIcon
  },
  { 
    prefixValue: "+44",
    value: "value 2",
    icon: guestIcon
  },
  { 
    prefixValue: "+010",
    value: "value 3",
    icon: guestIcon
  },
  { 
    prefixValue: "+0021",
    value: "value 4",
    icon: guestIcon
  },
]

const DropDownPage = () => {
  return (
    <div>
      <h3 className="story-title">Drop Down</h3>
      <section>
        <h4 className="story-title">Full Type</h4>
        <div className="m20">
          <DropDown type="full" placeholder="Large Size" optionList={dropDownSample}/>
        </div>
      </section>
      <section>
        <h4 className="story-title">Partial Type</h4>
        <div className="m20">
          <DropDown type="partial" defaultValue="value 1" optionList={dropDownSample}/>
        </div>
      </section>
    </div>
  )
};

export default DropDownPage;