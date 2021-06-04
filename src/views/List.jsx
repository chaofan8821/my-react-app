import React from 'react';
// import { Link } from 'react-router-dom';
import Header from './Header';

class List extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            list: [{
                name: 'aaaa',
                age: 1
            }, {
                name: 'bbbb',
                age: 2
            }, {
                name: 'cccc',
                age: 3
            }, {
                name: 'dddd',
                age: 4
            }]
        };
    }
    componentDidMount() {
        console.log('componentDidMount');
    }
    render() {
        return (
            <div style={{textAlign: 'center'}}>
                <Header />
                {/* <Link to='/home'>当前列表，回到首页</Link> */}
                <p onClick={() => {
                    this.props.history.push('/home');
                }}>当前列表，回到首页</p>
                <ul>
                    {
                        this.state.list.map(({name, age}, index) => {
                            return <li key={index}>
                                <span>name: {name}</span>,&nbsp;&nbsp;<span>age: {age}</span>
                            </li>
                        })
                    }
                </ul>
            </div>
        )
    }
}
export default List;