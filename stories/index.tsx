import React from 'react';
import { storiesOf } from '@storybook/react';

//* Import pages
import ButtonPage from './pages/ButtonPage';
import CalendarPage from './pages/CalendarPage';
import CarouselPage from './pages/CarouselPage'
import CheckboxPage from './pages/CheckboxPage';
import InputPage from './pages/InputPage';
import PopOverModalPage from './pages/PopOverModalPage';
import SpinnerPage from './pages/SpinnerPage';
import SelectorPage from './pages/SelectorPage';
import TimePickerPage from './pages/TimePickerPage';
import TogglePage from './pages/TogglePage';
import ToolTipPage from './pages/ToolTipPage';
import TypographyPage from './pages/TypographyPage';

// import TemplateCompPage from './pages/TemplateCompPage';

import './assets/style/index.less';

//* Add stories
storiesOf('General', module)
.add('Button', () => <ButtonPage />)
.add('Calendar', () => <CalendarPage />)
.add('Carousel', () => <CarouselPage />)
.add('Checkbox', () =>  <CheckboxPage />)
.add('Input', () => <InputPage />)
.add('PopOverModal', () => <PopOverModalPage />)
.add('Spinner', () => <SpinnerPage />)
.add('Selector', () => <SelectorPage />)
.add('Time Picker', () => <TimePickerPage />)
.add('Toggle', () => <TogglePage />)
.add('ToolTip', () => <ToolTipPage />)
.add('Typography', () => <TypographyPage />)

// .add('TemplateComp', () => <TemplateCompPage />);

//change 1