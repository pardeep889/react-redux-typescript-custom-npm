import React from 'react';
import { storiesOf } from '@storybook/react';

//* Import pages
import ButtonPage from './pages/ButtonPage';
import CheckboxPage from './pages/CheckboxPage';
import InputPage from './pages/InputPage';
import TypographyPage from './pages/TypographyPage';

import './assets/style/index.less';

//* Add stories
storiesOf('General', module)
.add('Button', () => <ButtonPage />)
.add('Checkbox', () =>  <CheckboxPage />)
.add('Input', () => <InputPage />)
.add('Typography', () => <TypographyPage />);