import Home from './views/Home';
import List from './views/List';

const routes = [{
    name: '首页',
    path: '/',
    component: Home
}, {
    name: '列表',
    path: '/list',
    component: List
}];

export default routes;