import React from 'react';
import { storiesOf } from '@storybook/react';

//* Import pages
import TypographyPage from './pages/TypographyPage';
import './assets/style/index.less';

//* Add stories
storiesOf('General', module)
.add('Typography', () => <TypographyPage />);