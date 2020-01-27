import React from 'react';
import { storiesOf } from '@storybook/react';

//* Import pages
import ButtonPage from './pages/ButtonPage';
import CalendarPage from './pages/CalendarPage';
import CheckboxPage from './pages/CheckboxPage';
import InputPage from './pages/InputPage';
import TogglePage from './pages/TogglePage';
import TimePickerPage from './pages/TimePickerPage';
import TypographyPage from './pages/TypographyPage';

import './assets/style/index.less';

//* Add stories
storiesOf('General', module)
.add('Button', () => <ButtonPage />)
.add('Calendar', () => <CalendarPage />)
.add('Checkbox', () =>  <CheckboxPage />)
.add('Input', () => <InputPage />)
.add('Toggle', () => <TogglePage />)
.add('Time Picker', () => <TimePickerPage />)
.add('Typography', () => <TypographyPage />);
