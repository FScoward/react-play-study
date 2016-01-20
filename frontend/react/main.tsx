/// <reference path="../../typings/tsd.d.ts" />

import * as React from 'react';
import * as ReactDOM from 'react-dom'

interface HelloProps {
  name: string;
}

class Main extends React.Component<HelloProps, {}> {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

ReactDOM.render(<Main name="FScoward" />, document.getElementById('fscoward'));
