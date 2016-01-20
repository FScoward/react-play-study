import * as React from 'react';
import * as ReactDOM from 'react-dom';
export class Main extends React.Component {
    render() {
        return <div>Hello {this.props.name}</div>;
    }
}
ReactDOM.render(<Main name="FScoward"/>, document.getElementById('fscoward'));
