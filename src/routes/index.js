import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from '~/pages/Home';
import Login from '~/pages/Login';
import Transactions from '~/pages/Transactions';

const publicRoutes = [
    { path: '/', component: Home },
    { path: '/login', component: Login, layout: null },
];

const privateRoutes = [{ path: '/transactions', component: Transactions }];

export { publicRoutes, privateRoutes };
