import React from 'react';
import logo from './logo.svg';

class Header extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.props.history.push('/xxx')
    }
    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>Welcome to React</h2>
                </div>
                <p className="App-intro">
                    To get started, edit <code>src/App.js</code> and save to reload.
              </p>
            </div>
        )
    }
}
export default Header;