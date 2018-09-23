import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { App } from './App';

import { library } from '@fortawesome/fontawesome-svg-core';
import {
  faFolderOpen,
  faLink,
  faSpinner,
  faInfoCircle,
  faCodeBranch,
  faBolt,
  faCubes,
  faPlusSquare,
  faClipboard,
  faCheck
} from '@fortawesome/free-solid-svg-icons';

library.add(
  faFolderOpen,
  faLink,
  faSpinner,
  faInfoCircle,
  faCodeBranch,
  faBolt,
  faCubes,
  faPlusSquare,
  faClipboard,
  faCheck

);

ReactDOM.render(<App />, document.getElementById('root'));
