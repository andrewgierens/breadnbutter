import glamorous from 'glamorous';

const sizes = {
  small: '0.70rem',
  normal: '0.95rem',
  large: '1rem',
}

export const Button = glamorous.button({  
  border: 'none',
  cursor: 'pointer',
  display: 'inline-block',
  textAlign: 'center',  
  borderRadius: '0.2rem',
  color: 'white',
  transition: '0.3s',
},
({rootColour = '#e06377', highlightColor = 'white', size = 'normal', primary = false}) => {
  // Some sizing
  let padding = '0.75rem';
  let minWidth = '8rem';

  if (size === 'large') padding = '0.75rem';
  if (size === 'small') padding = '0.5rem';
  
  if (size === 'large') minWidth = '10rem';
  if (size === 'small') minWidth = '6rem';


  // Some colouring
  let colour = rootColour;
  let backgroundColour = highlightColor;

  if (primary) {
    colour = backgroundColour;
    backgroundColour = rootColour;    
  }

  // On hover, we laugh bruz!
  const hover = {
    backgroundColor: colour,
    color: backgroundColour,
    border: `1px solid ${backgroundColour}`
  };

  return {
    border: `1px solid ${colour}`,
    backgroundColor: backgroundColour,
    color: colour,
    fontSize: sizes[size],
    padding,
    minWidth,
    ':hover': hover,
  };
});
