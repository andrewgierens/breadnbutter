import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../../components/8bit/button';

storiesOf('8Bit/Button', module)
  .add('normal with text (primary)', () => (
    <Button type="primary">Normal Primary</Button>
  ))
  .add('small with text (link)', () => (
    <Button size="small" type="link">Small Link</Button>
  ))
  .add('large with text (info)', () => (
    <Button size="large" type="info">Large Info</Button>
  ))
  .add('normal with text (success)', () => (
    <Button size="normal" type="success">Yay. Success.</Button>
  ))
  .add('small with text (danger)', () => (
    <Button size="small" type="danger">Eeep. Dangja!</Button>
  ))
  .add('small with text (purple)', () => (
    <Button size="small" color="purple">Who da purp?!</Button>
  ));
