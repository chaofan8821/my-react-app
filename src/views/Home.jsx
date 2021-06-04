import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

class Home extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
        // this.props.history.push('/xxx')
    }
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Header />
                <Link to='/list'>当前首页，查看列表</Link>
            </div>
        )
    }
}
export default Home;