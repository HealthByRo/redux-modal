/* @flow */

import React, { PureComponent } from 'react';

import Card from 'antd/lib/card';
import 'antd/lib/card/style/css';

export default class MyComponent extends PureComponent {
  static defaultProps = {
    text: 'DEFAULT_TEXT',
  };

  props: {
    text: string,
  };

  render() {
    return (
      <Card title="Sample component">lorem ipsum dolor sit</Card>
    );
  }
}
