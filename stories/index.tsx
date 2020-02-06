import React from 'react';
import { storiesOf } from '@storybook/react';

//* Import pages
import ButtonPage from './pages/ButtonPage';
import CalendarPage from './pages/CalendarPage';
import CarouselPage from './pages/CarouselPage'
import CheckboxPage from './pages/CheckboxPage';
import DropDownPage from './pages/DropDownPage';
import InputPage from './pages/InputPage';
import PopOverPage from './pages/PopOverPage';
import SpinnerPage from './pages/SpinnerPage';
import SelectorPage from './pages/SelectorPage';
import TimePickerPage from './pages/TimePickerPage';
import TogglePage from './pages/TogglePage';
import ToolTipPage from './pages/ToolTipPage';
import TypographyPage from './pages/TypographyPage';

import './assets/style/index.less';

//* Add stories
storiesOf('General', module)
.add('Button', () => <ButtonPage />)
.add('Calendar', () => <CalendarPage />)
.add('Carousel', () => <CarouselPage />)
.add('Checkbox', () =>  <CheckboxPage />)
.add('DropDown', () =>  <DropDownPage />)
.add('Input', () => <InputPage />)
.add('PopOver', () => <PopOverPage />)
.add('Spinner', () => <SpinnerPage />)
.add('Selector', () => <SelectorPage />)
.add('Time Picker', () => <TimePickerPage />)
.add('Toggle', () => <TogglePage />)
.add('ToolTip', () => <ToolTipPage />)
.add('Typography', () => <TypographyPage />)

//change 1