import React from 'react';
import { storiesOf } from '@kadira/storybook';
import 'antd/lib/layout/style/css';
import 'antd/lib/row/style/css';
import 'antd/lib/col/style/css';

import MyComponent from './MyComponent';

storiesOf('MyComponent', module)
  .add('without text prop', () => (
    <MyComponent />
  ));
