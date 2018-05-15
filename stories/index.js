import React from 'react';
import { storiesOf } from '@storybook/react';
import Button from '../components/button';
import Link from '../components/link';
import EightBitButton from '../components/8bit/button';

storiesOf('Button', module)
  .add('normal with text', () => (
    <Button>Buffon</Button>
  ))
  .add('small with text', () => (
    <Button size="small">Test button</Button>
  ))
  .add('large with text', () => (
    <Button size="large">Test button</Button>
  ))
  .add('normal with text (primary)', () => (
    <Button primary>Test button</Button>
  ))
  .add('normal with text lotsa text (primary)', () => (
    <Button primary>Test button with a really long text option</Button>
  ))
  .add('small with text (primary)', () => (
    <Button primary size="small">Test button</Button>
  ))
  .add('large with text (primary)', () => (
    <Button primary size="large">Test button</Button>
  ))
  .add('normal with text custom color', () => (
    <Button rootColor="#4286f4" size="normal">Test button</Button>
  ))
  .add('normal with text custom color (primary)', () => (
    <Button primary rootColor="#4286f4" size="normal">Test button</Button>
  ));

storiesOf('Link', module)
  .add('link to googz', () => (
    <Link target="_blank" href="http://www.google.com">Googz</Link>
  ));

storiesOf('EightBitButton', module)
  .add('normal with text (primary)', () => (
    <EightBitButton type="primary">Normal Primary</EightBitButton>
  ))
  .add('small with text (link)', () => (
    <EightBitButton size="small" type="link">Small Link</EightBitButton>
  ))
  .add('large with text (info)', () => (
    <EightBitButton size="large" type="info">Large Info</EightBitButton>
  ))
  .add('normal with text (success)', () => (
    <EightBitButton size="normal" type="success">Yay. Success.</EightBitButton>
  ))
  .add('small with text (danger)', () => (
    <EightBitButton size="small" type="danger">Eeep. Dangja!</EightBitButton>
  ))
  .add('small with text (purple)', () => (
    <EightBitButton size="small" color="purple">Who da purp?!</EightBitButton>
  ));
