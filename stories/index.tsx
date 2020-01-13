import React from 'react';
import { storiesOf } from '@storybook/react';

//* Import pages
// import ButtonPage from './pages/ButtonPage';
import TypographyPage from './pages/TypographyPage';

//* Add stories
storiesOf('General', module)
.add('Typography', () => <TypographyPage />);