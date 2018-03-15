/* @flow */

import React from 'react';
import { storiesOf } from '@kadira/storybook';
import ReduxModal from './';

const TestModal = () => <p>Example modal content</p>;

storiesOf('ReduxModal', module)
.add('Normal modal', () => (
  <div>
    <button>dupa</button>
    <ReduxModal
      name="TestModal"
      component={TestModal}
      contentLabel="Example modal"
    />
  </div>
));
