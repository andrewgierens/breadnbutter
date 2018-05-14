import glamarous from 'glamorous';

import { buttonLikeCommon, buttonLikePropHandler } from '../button';
import preventSelection from '../common/prevent-selection';

export default glamarous.a(
  preventSelection, {
    textDecoration: 'none',
    fontFamily: 'sans-serif',
  },
  buttonLikeCommon,
  buttonLikePropHandler,
);
