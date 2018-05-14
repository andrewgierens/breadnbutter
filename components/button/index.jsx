import glamorous from 'glamorous';

import fontSizes from '../common/font-sizes';
import preventSelection from '../common/prevent-selection';

export const buttonLikeCommon = {
  cursor: 'pointer',
  display: 'inline-block',
  textAlign: 'center',
  borderRadius: '0.2rem',
  transition: '0.3s',
};

export const buttonLikeBorderForColor = (color) => {
  return `1.5px solid ${color}`;
};

export const buttonLikePropHandler = ({
  rootColor = '#e06377',
  highlightColor = 'white',
  size = 'normal',
  primary = false,
}) => {
  // Some sizing
  let padding = '0.65rem';
  let minWidth = '8rem';

  if (size === 'large') padding = '0.75rem';
  if (size === 'small') padding = '0.5rem';

  if (size === 'large') minWidth = '10rem';
  if (size === 'small') minWidth = '6rem';

  // Some coloring
  let color = rootColor;
  let backgroundColor = highlightColor;
  let border = buttonLikeBorderForColor(color);

  if (primary) {
    color = backgroundColor;
    backgroundColor = rootColor;
    border = buttonLikeBorderForColor(backgroundColor);
  }


  // On hover, we laugh bruz!
  const hover = {
    backgroundColor: color,
    color: backgroundColor,
  };

  if (primary) {
    hover.border = buttonLikeBorderForColor(backgroundColor);
  } else {
    hover.border = buttonLikeBorderForColor(color);
  }

  // On click, we fly bruz
  const active = {};

  if (primary) {
    active.backgroundColor = backgroundColor;
    active.color = backgroundColor;
  } else {
    active.backgroundColor = color;
    active.color = color;
  }

  return {
    border,
    backgroundColor,
    color,
    fontSize: fontSizes[size],
    padding,
    minWidth,
    ':hover': hover,
    ':active': active,
  };
};

export const Button = glamorous.button(
  preventSelection,
  buttonLikeCommon,
  buttonLikePropHandler,
);
