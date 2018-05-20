import glamarous from 'glamorous';

import { buttonStyle } from '../button';
import preventSelection from '../../common/prevent-selection';

export default glamarous.a(
  preventSelection, {
    textDecoration: 'none',
    fontFamily: 'sans-serif',
  },
  buttonStyle,
);
