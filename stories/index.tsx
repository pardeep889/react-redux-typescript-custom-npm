import React from 'react';
import { storiesOf } from '@storybook/react';

//* Import pages
import ButtonPage from './pages/ButtonPage';
import CalendarPage from './pages/CalendarPage';
import CheckboxPage from './pages/CheckboxPage';
import InputPage from './pages/InputPage';
import TimePickerPage from './pages/TimePickerPage';
import TogglePage from './pages/TogglePage';
import ToolTipPage from './pages/ToolTipPage';
import TypographyPage from './pages/TypographyPage';

import './assets/style/index.less';

//* Add stories
storiesOf('General', module)
.add('Button', () => <ButtonPage />)
.add('Calendar', () => <CalendarPage />)
.add('Checkbox', () =>  <CheckboxPage />)
.add('Input', () => <InputPage />)
.add('Time Picker', () => <TimePickerPage />)
.add('Toggle', () => <TogglePage />)
.add('ToolTip', () => <ToolTipPage />)
.add('Typography', () => <TypographyPage />);
