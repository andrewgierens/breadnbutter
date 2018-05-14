import React from 'react';
import { storiesOf } from '@storybook/react';
import { Button } from '../components/button';

storiesOf('Button', module)
  .add('normal with text', () => (
    <Button>Test button</Button>
  ))
  .add('small with text', () => (
    <Button size='small'>Test button</Button>
  ))
  .add('large with text', () => (
    <Button size='large'>Test button</Button>
  ))
  .add('normal with text (primary)', () => (
    <Button primary>Test button</Button>
  ))
  .add('small with text (primary)', () => (
    <Button primary size='small'>Test button</Button>
  ))
  .add('large with text (primary)', () => (
    <Button primary size='large'>Test button</Button>
  ))
  .add('normal with text custom colour', () => (
    <Button rootColour="#4286f4" highlightColour="black" size='normal'>Test button</Button>
  ))
  .add('normal with text custom colour (primary)', () => (
    <Button primary rootColour="#4286f4" highlightColour="black" size='normal'>Test button</Button>
  ));
