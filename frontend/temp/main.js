import * as React from 'react';
import * as ReactDOM from 'react-dom';
class Main extends React.Component {
    render() {
        return React.createElement("div", null, "Hello ", this.props.name);
    }
}
ReactDOM.render(React.createElement(Main, {"name": "FScoward"}), document.getElementById('fscoward'));
