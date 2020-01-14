import React from 'react';
import { storiesOf } from '@storybook/react';

//* Import pages
import ButtonPage from './pages/ButtonPage';
import TypographyPage from './pages/TypographyPage';
import InputPage from './pages/InputPage';

import './assets/style/index.less';

//* Add stories
storiesOf('General', module)
.add('Input', () => <InputPage />)
.add('Button', () => <ButtonPage />)
.add('Typography', () => <TypographyPage />);