import * as React from 'react';
import * as ReactDOM from 'react-dom';

class App extends React.Component<any, any> {
    render() {
        return (
            <div className="main">
                <h1 className="heroUnit">TSX with SCSS!</h1>
            </div>
        );
    }
}

ReactDOM.render(React.createElement(App), document.getElementById('app'));
