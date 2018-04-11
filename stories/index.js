import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/button';
import transition from '../components/utils/transition'
import themes from '../components/themes';

storiesOf('Button', module)
  .add('Solid', () => (
    <Button solid />
  ))
  .add('Holo', () => (
    <Button solid={false} />
  ))
  .add('Holo with hover transition', () => (
    <Button solid={false} hoverTransition={transition.SlowFade} />
  ))
  .add('Holo with blue theme', () => (
    <Button solid={false} theme={themes.blueTheme} />
  ))