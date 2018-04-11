import React from 'react';
import PropTypes from 'prop-types';
import glamorous, { ThemeProvider } from 'glamorous';
import transition from '../utils/transition';
import themes from '../themes';

const GlamButton = glamorous.a({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '11em',
  padding: '0.7em 0',
  fontFamily: "'Montserrat', sans-serif",
  textDecoration: 'none',
}, ({ solid, hoverTransition, theme }) => ({
  border: `1px solid ${theme.main.secondaryColour}`,
  backgroundColor: solid ? theme.main.color : 'rgba(255, 255, 255, 0.5)',
  color: solid ? '#fff' : theme.main.color,
  ':hover': {
    backgroundColor: solid ? 'rgba(255, 255, 255, 0.5)' : theme.main.color,
    color: solid ? theme.main.color : '#fff',
  },
  transition: !hoverTransition || hoverTransition === transition.None 
    ? ''
    : `all .${hoverTransition}s`,
}))

const Button = ({ theme, solid, hoverTransition }) => {
  if (!theme) theme = themes.defaultTheme;
  return (
    <GlamButton theme={theme}
      solid={solid}
      hoverTransition={hoverTransition}
    >
    Test Link
    </GlamButton>
  );
};

Button.propTypes = {
  theme: PropTypes.shape.isRequired
};

export default Button;