import Home from '../pages/Home';
import Login from '../pages/Login';
import DefaultLayout from '../layouts/DefaultLayout';
import LoginLayout from '../layouts/LoginLayout';
import Register from '../pages/Register';
import Dashboard from '../pages/Dashboard';

const publicRoutes = [
    { path: '/home', component: Home },
    { path: '/', component: Login, layout: LoginLayout },
    { path: '/register', component: Register, layout: LoginLayout },
    { path: '/dashboard', component: Dashboard, layout: DefaultLayout },
];

const privateRoutes = [];

export { publicRoutes, privateRoutes };
