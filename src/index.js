import React from 'react';
import { render } from 'react-dom';
import {SnackbarProvider} from 'notistack';
import App from 'App';


render(
  <SnackbarProvider 
  dense
  hideIconVariant
  preventDuplicate
  maxSnack={3}
  anchorOrigin={{
    vertical: 'bottom',
    horizontal: 'left',
    TransitionComponent: 'Fade',
  }}
  >
    <App/>
  </SnackbarProvider>,
  document.getElementById('root')
);
